package com.example.backend.auth;

import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.register.token.Token;
import com.example.backend.register.token.TokenRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.security.PasswordEncoder;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class AuthController {
    private final UserService userService;
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final TokenRepository tokenRepository;

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<Auth> login(@RequestBody User user) {
        Optional<User> byEmail = userRepository.findByEmail(user.getEmail());
        if (!byEmail.isPresent()) {
            logger.warn("Auth failed, user not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else if (passwordEncoder.bCryptPasswordEncoder().matches(user.getPassword(), byEmail.get().getPassword())){
            userService.login(byEmail.get());
            String name = byEmail.get().getUsername();
            Integer userId = byEmail.get().getId();
            Role role;
            byte[] certificate = byEmail.get().getCertificate();
            if(certificate == null)
                role = Role.TRAINEE;
            else role = Role.TRAINER;

            Auth auth = new Auth(Long.valueOf(userId), name, role);
            logger.info("User was login successfully");
            return new ResponseEntity<>(auth, HttpStatus.OK);
        }
        else {
            logger.warn("Auth failed");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

//    @GetMapping("/logout")
//    public ResponseEntity<String> logout(@RequestParam(name = "token") String token) {
//        Optional<Token> byToken = tokenRepository.findByToken(token);
//        if (!byToken.isPresent()) {
//            logger.warn("Logout failed");
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        } else {
//            tokenRepository.delete(byToken.get());
//            logger.info("User was logout successfully");
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//    }
}
