package com.example.backend.service;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.PasswordEncoder;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@Transactional
@Slf4j
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

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

    public User findUserByEmail(String email) throws UsernameNotFoundException{
        return userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(String.format("user with email %s not found", email)));
    }

    public ResponseEntity<?> signUpUser(User user) {
        boolean userExists = userRepository.findByName(user.getName()).isPresent();
        if (userExists) {
            logger.info("At singUp user with email " + user.getName() + " already exist");
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

        logger.info("At singUp user " + user.getEmail() + " was created successfully");
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @Override
    public User loadUserByUsername(String name) throws UsernameNotFoundException {
        return userRepository.findByName(name).orElseThrow(() -> new UsernameNotFoundException(String.format("user with name %s not found", name)));

    }

    private Collection< ? extends GrantedAuthority> mapRolesToAuthorities(Collection <Role> roles) {
        Collection < ? extends GrantedAuthority> mapRoles = roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.name()))
                .collect(Collectors.toList());
        return mapRoles;
    }

    public void login(User user) {
    }

    public List<UserDTO> findAllUsers() {
        List<User> users = userRepository.findAll();
        return (List<UserDTO>) Collectors.toList();
    }
}
