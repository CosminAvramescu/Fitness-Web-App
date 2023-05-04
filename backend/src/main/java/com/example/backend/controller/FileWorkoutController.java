package com.example.backend.controller;

import com.example.backend.model.FileWorkout;
import com.example.backend.service.FileWorkoutService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("fileWorkout")
@CrossOrigin(origins = "*")
public class FileWorkoutController {
    private final FileWorkoutService fileWorkoutService;

    @GetMapping("get/{fileWorkoutId}")
    public FileWorkout getFileWorkoutById(@PathVariable("fileWorkoutId") Integer id){
        return fileWorkoutService.getFileWorkoutById(id);
    }

    @PostMapping("add")
    public FileWorkout addFileWorkout(@RequestBody FileWorkout fileWorkout){
        return fileWorkoutService.addFileWorkout(fileWorkout);
    }

    @PutMapping("setWorkout/{fileWorkoutId}/{workoutId}")
    public FileWorkout setWorkout(@PathVariable("fileWorkoutId") Integer fileWorkoutId,
                                  @PathVariable("workoutId") Integer workoutId){
        return fileWorkoutService.setWorkout(fileWorkoutId, workoutId);
    }
}
