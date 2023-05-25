package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.dto.WorkoutDTO;
import com.example.backend.mapper.UserMapper;
import com.example.backend.mapper.WorkoutMapper;
import com.example.backend.model.FileWorkout;
import com.example.backend.model.User;
import com.example.backend.model.Workout;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
//import org.apache.commons.io.FileUtils;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("user")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;

    private final UserMapper userMapper;

    private final WorkoutMapper workoutMapper;

    @PutMapping("upload/certificate/{userId}")
    public User setCertificate(@RequestParam("file") MultipartFile file, @PathVariable Integer userId) {
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
        byte[] certificate = user.getCertificate();
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
    public UserDTO setWorkout(@PathVariable("userId") Integer userId, @PathVariable("workoutId") Integer workoutId) {
        return userMapper.toUserDTO(userService.setWorkout(userId, workoutId));
    }

    @PostMapping("addUser")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("all")
    public List<UserDTO> getAll() {
        return userMapper.toListUserDTO(userService.getAll());
    }

    @GetMapping("getAll/{userId}")
    public List<WorkoutDTO> getAllWorkoutsByUserId(@PathVariable Integer userId) {
        return workoutMapper.toListWorkoutDTO(userService.getAllWorkoutsByUserId(userId));
    }

    @GetMapping("count/workoutsNumber/{userId}")
    public Integer countWorkoutsByUserId(@PathVariable("userId") Integer userId) {
        return userService.countWorkoutsByUserId(userId);
    }

    @PutMapping("upload/{userId}")
    public User setUserPicture(@RequestParam("file") MultipartFile file, @PathVariable("userId") Integer userId) {
        User user = userService.getUserById(userId);

        try {
            user.setUserPicture(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return userService.addUser(user);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") Integer id) {
        // Retrieve the image byte array based on the provided ID
        byte[] imageBytes=userService.getUserById(id).getUserPicture();

        // Set the appropriate headers for the image response
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Adjust the media type based on your image format
        headers.setContentLength(imageBytes.length);

        // Return the image byte array as the response body with the appropriate headers
        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }
}
