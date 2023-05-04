package com.example.backend.controller;

import com.example.backend.model.FileWorkout;
import com.example.backend.model.User;
import com.example.backend.model.Workout;
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

    @PutMapping("upload/{userId}")
    public Workout addFiles(@RequestParam("files") List<MultipartFile> files, @PathVariable Integer workoutId){
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
        }
        workout.setFileWorkouts(fileWorkouts);
        return workoutService.addWorkout(workout);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadFile(@PathVariable("id") Integer workoutId) {
        Workout workout=workoutService.getWorkoutById(workoutId);

        for(FileWorkout fw: workout.getFileWorkouts()){
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_PDF);

            headers.setContentDisposition(ContentDisposition.attachment()
                    .filename(fw.getFilename())
                    .build());
            byte[] certificate= fw.getFileWorkout();
            String home = System.getProperty("user.home");
            String filePath = home + "/Downloads/Workout" + fw.getFilename();

//            try {
//                FileUtils.writeByteArrayToFile(new File(filePath), certificate);
//            } catch (IOException e) {
//                throw new RuntimeException("Error saving file to local path", e);
//            }

            return new ResponseEntity<>(fw.getFileWorkout(), headers, HttpStatus.OK);
        }
        return null;
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
}
