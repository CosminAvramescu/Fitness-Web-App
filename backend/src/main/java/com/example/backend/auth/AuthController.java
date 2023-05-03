package com.example.backend.auth;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
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

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<Auth> login(@RequestBody AuthRequest authRequest) {
        Optional<User> byUsername = userRepository.findByName(authRequest.getUsername());
        if (!byUsername.isPresent()) {
            logger.warn("Auth failed, user not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            userService.login(byUsername.get());
            String username = byUsername.get().getName();
            Integer userId = byUsername.get().getId();
            Enum role = byUsername.get().getRole();
            Auth auth = new Auth(Long.valueOf(userId), username, role);
            logger.info("User was login with successfully");
            return new ResponseEntity<>(auth, HttpStatus.OK);
        }
    }
}
