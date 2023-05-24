package com.example.backend.controller;

import com.example.backend.model.NutritionPlan;
import com.example.backend.model.Workout;
import com.example.backend.service.NutritionPlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("nutrition")
@CrossOrigin(origins = "*")
public class NutritionPlanController {
    private final NutritionPlanService nutritionPlanService;


    @PutMapping("setUser/{nutritionPlanId}/{userId}")
    public void setUser(@PathVariable("nutritionPlanId") Integer nutritionPlanId, @PathVariable("userId") Integer userId){
        nutritionPlanService.setUser(nutritionPlanId, userId);
    }

    @PostMapping("addNutritionPlan")
    public NutritionPlan addNutritionPlan(@RequestBody NutritionPlan nutritionPlan){
        return nutritionPlanService.addNutritionPlan(nutritionPlan);
    }

    @PutMapping("setFileWorkout/{nutritionPlanId}/{fileWorkoutId}")
    public void setFileWorkout(@PathVariable("nutritionPlan") Integer nutritionPlanId,
                               @PathVariable("fileWorkoutId") Integer fileWorkoutId) {
        nutritionPlanService.setFileWorkout(nutritionPlanId, fileWorkoutId);
    }

}
