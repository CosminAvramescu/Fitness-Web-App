package com.example.backend.register;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

@Service
@AllArgsConstructor
public class RegisterService {
    private final UserService userService;

    public ResponseEntity<String> register(Register register){
        User user = new User(register.getName(),
                register.getEmail(),
                register.getPassword());
        ResponseEntity responseEntity = userService.signUpUser(user);
        String userString = String.valueOf(responseEntity);
        return new ResponseEntity<>(userString, responseEntity.getStatusCode());
    }
}
