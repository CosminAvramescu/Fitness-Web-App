package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.model.Workout;
import com.example.backend.register.token.Token;
import com.example.backend.register.token.TokenRepository;
import com.example.backend.register.token.TokenService;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.WorkoutRepository;
import com.example.backend.security.PasswordEncoder;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;


@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    private final TokenRepository tokenRepository;

    private final WorkoutRepository workoutRepository;

    Logger logger = LoggerFactory.getLogger(UserService.class);

    public User addUser(User user){
        return userRepository.save(user);
    }

    public User getUserById(Integer id){
        return userRepository.getUserById(id);
    }

    public ResponseEntity<?> signUpUser(User user) {
        boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();
        if (userExists) {
            logger.info("At singUp user with email " + user.getEmail() + " already exist");
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        boolean namePresent = userRepository.findByUsername(user.getUsername()).isPresent();
        if (namePresent) {
            logger.info("At singUp user with username " + user.getUsername() + " already exist");
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        String encodedPassword = passwordEncoder.bCryptPasswordEncoder().encode(user.getPassword());
        user.setPassword(encodedPassword);

        userRepository.save(user);

        String randomToken = UUID.randomUUID().toString();
        Token token = new Token(
                randomToken,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(60),
                user
        );

        tokenService.saveToken(token);

        logger.info("At singUp user " + user.getEmail() + " was created successfully");
        return new ResponseEntity<>(HttpStatus.OK);
    }


    public void login(User user) {
        Token token = tokenRepository.getTokenByUser(user);

        if(token == null)
        {
            String randomToken = UUID.randomUUID().toString();
            Token newToken = new Token(
                    randomToken,
                    LocalDateTime.now(),
                    LocalDateTime.now().plusMinutes(60),
                    user
            );
            tokenService.saveToken(newToken);
            logger.info("User with email " + user.getEmail() + "is connected");
        }
    }

    public User setWorkout(Integer userId,Integer workoutId){
        User user=userRepository.getUserById(userId);
        Workout workout=workoutRepository.getWorkoutById(workoutId);
        List<Workout> workoutList=user.getWorkoutList();
        workoutList.add(workout);
        user.setWorkoutList(workoutList);

        return userRepository.save(user);
    }
}
