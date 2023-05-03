package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.register.token.Token;
import com.example.backend.register.token.TokenRepository;
import com.example.backend.register.token.TokenService;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.PasswordEncoder;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;


@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    private final TokenRepository tokenRepository;

    Logger logger = LoggerFactory.getLogger(UserService.class);


    public User saveUser(UserDTO userDTO){
        User user = new User();
        user.setName(userDTO.getName() );
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.bCryptPasswordEncoder().encode(user.getPassword()));
        user.setRole(userDTO.getRole());
        user.setCertificate(userDTO.getCertificate());
        user.setAge(userDTO.getAge());
        user.setWeight(userDTO.getWeight());
        user.setHeight(userDTO.getHeight());
        user.setSex(userDTO.getSex());

        return userRepository.save(user);
    }



    public ResponseEntity<?> signUpUser(User user) {
        boolean userExists = userRepository.findByEmail(user.getEmail()).isPresent();
        if (userExists) {
            logger.info("At singUp user with email " + user.getEmail() + " already exist");
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        boolean namePresent = userRepository.findByName(user.getName()).isPresent();
        if (namePresent) {
            logger.info("At singUp user with username " + user.getName() + " already exist");
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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

    @Override
    public User loadUserByUsername(String name) throws UsernameNotFoundException {
        return userRepository.findByName(name).orElseThrow(() -> new UsernameNotFoundException(String.format("user with name %s not found", name)));

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
}
