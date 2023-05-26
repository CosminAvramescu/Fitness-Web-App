package com.example.backend.controller;

import com.example.backend.dto.WorkoutDTO;
import com.example.backend.mapper.WorkoutMapper;
import com.example.backend.model.FileWorkout;
import com.example.backend.model.User;
import com.example.backend.model.Workout;
import com.example.backend.repository.FileWorkoutRepository;
import com.example.backend.service.WorkoutService;
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
@RequestMapping("workout")
@CrossOrigin(origins = "*")
public class WorkoutController {
    private final WorkoutService workoutService;

    private final WorkoutMapper workoutMapper;

    private final FileWorkoutRepository fileWorkoutRepository;

    @GetMapping
    public List<Workout> getAllWorkouts(){
        return workoutService.getALlWorkouts();
    }

    @GetMapping("/all/{id}")
    public List<Workout> getAllByUser_Id(@PathVariable("id") Integer id){
        return workoutService.getAllByUser_Id(id);
    }

    @PutMapping("setUser/{workoutId}/{userId}")
    public void setUser(@PathVariable("workoutId") Integer workoutId, @PathVariable("userId") Integer userId){
        workoutService.setUser(workoutId, userId);
    }

    @PostMapping("addWorkout")
    public Workout addWorkout(@RequestBody Workout workout){
        return workoutService.addWorkout(workout);
    }

    @PutMapping("upload/{workoutId}")
    public Workout addFiles(@RequestParam("files") List<MultipartFile> files, @PathVariable("workoutId") Integer workoutId){
        Workout workout=workoutService.getWorkoutById(workoutId);

        List<FileWorkout> fileWorkouts=new ArrayList<>();
        for(MultipartFile file:files){
            FileWorkout fw=new FileWorkout();
            try {
                fw.setFileWorkout(file.getBytes());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            fw.setFilename(file.getOriginalFilename());
            fileWorkouts.add(fw);
            fileWorkoutRepository.save(fw);
        }
        workout.setFileWorkouts(fileWorkouts);
        return workoutService.addWorkout(workout);
    }

    @PutMapping("upload/workoutPicture/{workoutId}")
    public WorkoutDTO setWorkoutPicture(@RequestParam("file") MultipartFile file, @PathVariable("workoutId") Integer workoutId) {
        Workout workout = workoutService.getWorkoutById(workoutId);

        try {
            workout.setWorkoutPicture(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return workoutMapper.toWorkoutDTO(workoutService.addWorkout(workout));
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") Integer id) {
        // Retrieve the image byte array based on the provided ID
        List<FileWorkout> fileWorkouts = workoutService.getWorkoutById(id).getFileWorkouts();
        byte[] imageBytes=fileWorkouts.get(0).getFileWorkout();

        // Set the appropriate headers for the image response
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Adjust the media type based on your image format
        headers.setContentLength(imageBytes.length);

        // Return the image byte array as the response body with the appropriate headers
        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    @GetMapping("/downloadW/{id}")
    public ResponseEntity<byte[]> getImageW(@PathVariable("id") Integer id) {
        // Retrieve the image byte array based on the provided ID
        Workout workout = workoutService.getWorkoutById(id);
        byte[] imageBytes=workout.getWorkoutPicture();

        // Set the appropriate headers for the image response
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Adjust the media type based on your image format
        headers.setContentLength(imageBytes.length);

        // Return the image byte array as the response body with the appropriate headers
        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }

    @GetMapping("allFileWorkouts/{workoutId}")
    public List<FileWorkout> getAllFileWorkouts(@PathVariable("workoutId") Integer workoutId){
        return workoutService.getAllFileWorkouts(workoutId);
    }

    @PutMapping("setFileWorkout/{workoutId}/{fileWorkoutId}")
    public void setFileWorkout(@PathVariable("workoutId") Integer workoutId,
                               @PathVariable("fileWorkoutId") Integer fileWorkoutId){
        workoutService.setFileWorkout(workoutId, fileWorkoutId);
    }

    @GetMapping("all")
    public List<WorkoutDTO> getAll(){
        return workoutMapper.toListWorkoutDTO(workoutService.getAll());
    }
}
