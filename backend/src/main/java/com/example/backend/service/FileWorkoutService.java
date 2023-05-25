package com.example.backend.service;

import com.example.backend.model.FileWorkout;
import com.example.backend.model.NutritionPlan;
import com.example.backend.model.Workout;
import com.example.backend.repository.FileWorkoutRepository;
import com.example.backend.repository.NutritionPlanRepository;
import com.example.backend.repository.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
@RequiredArgsConstructor
public class FileWorkoutService {
    private final FileWorkoutRepository fileWorkoutRepository;

    private final WorkoutRepository workoutRepository;

    private final NutritionPlanRepository nutritionPlanRepository;

    public FileWorkout getFileWorkoutById(Integer id){
        return fileWorkoutRepository.getFileWorkoutById(id);
    }

    public FileWorkout addFileWorkout(FileWorkout fileWorkout){
        return fileWorkoutRepository.save(fileWorkout);
    }

    public FileWorkout setWorkout(Integer fileWorkoutId, Integer workoutId){
        FileWorkout fileWorkout=fileWorkoutRepository.getFileWorkoutById(fileWorkoutId);
        Workout workout=workoutRepository.getWorkoutById(workoutId);

        fileWorkout.setWorkout(workout);

        return fileWorkoutRepository.save(fileWorkout);
    }

    public FileWorkout setNutrition(Integer fileWorkoutId, Integer nutritionId){
        FileWorkout fileWorkout=fileWorkoutRepository.getFileWorkoutById(fileWorkoutId);
        NutritionPlan nutritionPlan=nutritionPlanRepository.getNutritionPlanById(nutritionId);

        fileWorkout.setNutritionPlan(nutritionPlan);

        return fileWorkoutRepository.save(fileWorkout);
    }
}
