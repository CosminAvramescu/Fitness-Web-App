package com.example.backend.mapper;


import com.example.backend.dto.FileWorkoutDTO;
import com.example.backend.dto.NutritionPlanDTO;
import com.example.backend.model.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NutritionPlanMapper {
    @Mapping(target = "id", source = "id")
    @Mapping(target = "description", source = "description")
    @Mapping(target = "title", source = "title")
    @Mapping(target = "price", source = "price")
    @Mapping(target = "timeToComplete", source = "timeToComplete")
    @Mapping(target = "trainerId", expression = "java(getTrainerId(nutritionPlan))")
    NutritionPlanDTO toNutritionPlanDTO(NutritionPlan nutritionPlan);

    List<NutritionPlanDTO> toListNutritionPlanDTO(List<NutritionPlan> nutritionPlans);

    default Integer getTrainerId(NutritionPlan nutritionPlan) {
        List<User> users=nutritionPlan.getUsers();
        for (User user : users) {
            if (user.getRole() == Role.TRAINER) {
                return user.getId();
            }
        }
        return null;
    }
}
