package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
//import org.apache.commons.io.FileUtils;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("user")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;
    @PutMapping("upload/certificate/{userId}")
    public User setCertificate(@RequestParam("file") MultipartFile file, @PathVariable Integer userId){
        User user = userService.getUserById(userId);
        try {
            user.setCertificate(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return userService.addUser(user);
    }

    @GetMapping("/download/certificate/{id}")
    public ResponseEntity<byte[]> getCertificate(@PathVariable("id") Integer id) {
        User user = userService.getUserById(id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);

        headers.setContentDisposition(ContentDisposition.attachment()
                .filename("certificate.pdf")
                .build());
        byte[] certificate= user.getCertificate();
        String home = System.getProperty("user.home");
        String filePath = home + "/Downloads/" + "certificate.pdf";

//        try {
//            FileUtils.writeByteArrayToFile(new File(filePath), certificate);
//        } catch (IOException e) {
//            throw new RuntimeException("Error saving file to local path", e);
//        }


        return new ResponseEntity<>(user.getCertificate(), headers, HttpStatus.OK);
    }

    @PutMapping("setWorkout/{userId}/{workoutId}")
    public User setWorkout(@PathVariable("userId") Integer userId, @PathVariable("workoutId") Integer workoutId){
        return userService.setWorkout(userId, workoutId);
    }

    @PostMapping("addUser")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }
}
