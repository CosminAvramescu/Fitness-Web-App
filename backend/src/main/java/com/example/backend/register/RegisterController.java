package com.example.backend.register;

import com.example.backend.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1")
@Component
@CrossOrigin(origins="*")
public class RegisterController {
    @Autowired
    private RegisterService registerService;

    @PostMapping("register")
    public ResponseEntity<String> register(@RequestBody User user){
        ResponseEntity responseEntity = registerService.register(user);
        return new ResponseEntity(responseEntity, responseEntity.getStatusCode());
    }
}
