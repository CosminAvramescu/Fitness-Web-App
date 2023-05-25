package com.example.backend.controller;

import com.example.backend.dto.FileWorkoutDTO;
import com.example.backend.mapper.FileWorkoutMapper;
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

    private final FileWorkoutMapper fileWorkoutMapper;

    @GetMapping("get/{fileWorkoutId}")
    public FileWorkout getFileWorkoutById(@PathVariable("fileWorkoutId") Integer id){
        return fileWorkoutService.getFileWorkoutById(id);
    }

    @PostMapping("add")
    public FileWorkout addFileWorkout(@RequestBody FileWorkout fileWorkout){
        return fileWorkoutService.addFileWorkout(fileWorkout);
    }

    @PutMapping("setWorkout/{fileWorkoutId}/{workoutId}")
    public FileWorkoutDTO setWorkout(@PathVariable("fileWorkoutId") Integer fileWorkoutId,
                                     @PathVariable("workoutId") Integer workoutId){
        return fileWorkoutMapper.toFileWorkoutDTO(fileWorkoutService.setWorkout(fileWorkoutId, workoutId));
    }

    @PutMapping("setNutrition/{fileWorkoutId}/{nutritionId}")
    public FileWorkoutDTO setNutrition(@PathVariable("fileWorkoutId") Integer fileWorkoutId,
                                     @PathVariable("nutritionId") Integer nutritionId){
        return fileWorkoutMapper.toFileWorkoutDTO(fileWorkoutService.setNutrition(fileWorkoutId, nutritionId));
    }
}
