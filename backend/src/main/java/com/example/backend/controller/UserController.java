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

    @PutMapping("setNutrition/{userId}/{nutritionId}")
    public void setNutritionPlan(@PathVariable("userId") Integer userId, @PathVariable("nutritionId") Integer nutritionId) {
        userService.setNutritionPlan(userId, nutritionId);
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
    public UserDTO setUserPicture(@RequestParam("file") MultipartFile file, @PathVariable("userId") Integer userId) {
        User user = userService.getUserById(userId);

        try {
            user.setUserPicture(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return userMapper.toUserDTO(userService.addUser(user));
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") Integer id) {
        // Retrieve the image byte array based on the provided ID
        byte[] imageBytes = userService.getUserById(id).getUserPicture();

        // Set the appropriate headers for the image response
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Adjust the media type based on your image format
        headers.setContentLength(imageBytes.length);

        // Return the image byte array as the response body with the appropriate headers
        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    @GetMapping("getUser/{userId}")
    public UserDTO getUserById(@PathVariable Integer userId) {
        return userMapper.toUserDTO(userService.getUserById(userId));
    }

    @PutMapping("changeData")
    public UserDTO changeData(@RequestBody User u) {
        User user = userService.getUserById(u.getId());
        if (u.getFirstName() != null) {
            user.setFirstName(u.getFirstName());
        }

        if (u.getLastName() != null) {
            user.setLastName(u.getLastName());
        }

        if (u.getUsername() != null) {
            user.setUsername(u.getUsername());
        }

        if (u.getEmail() != null) {
            user.setEmail(u.getEmail());
        }

        if (u.getAge() != null) {
            user.setAge(u.getAge());
        }

        if (u.getWeight() != null) {
            user.setWeight(u.getWeight());
        }

        if (u.getHeight() != null) {
            user.setHeight(u.getHeight());
        }

        if (u.getCounty() != null) {
            user.setCounty(u.getCounty());
        }

        if (u.getStreet() != null) {
            user.setStreet(u.getStreet());
        }

        if (u.getContactPhone() != null) {
            user.setContactPhone(u.getContactPhone());
        }

        return userMapper.toUserDTO(userService.addUser(user));
    }
}
