package com.example.backend.register;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1")
@Component
public class RegisterController {
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Register register){
        ResponseEntity responseEntity = registerService.register(register);
        return new ResponseEntity(responseEntity, responseEntity.getStatusCode());
    }
}
