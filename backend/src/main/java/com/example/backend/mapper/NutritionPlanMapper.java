package com.example.backend.mapper;


import com.example.backend.dto.FileWorkoutDTO;
import com.example.backend.dto.NutritionPlanDTO;
import com.example.backend.model.FileWorkout;
import com.example.backend.model.NutritionPlan;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NutritionPlanMapper {
    @Mapping(target = "description", source = "description")
    NutritionPlanDTO toNutritionPlanDTO(NutritionPlan nutritionPlan);

    List<NutritionPlanDTO> toListNutritionPlanDTO(List<NutritionPlan> nutritionPlans);
}
