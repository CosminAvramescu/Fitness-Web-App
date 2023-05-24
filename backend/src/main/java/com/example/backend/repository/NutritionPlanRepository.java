package com.example.backend.repository;

import com.example.backend.model.NutritionPlan;
import org.springframework.data.jpa.repository.JpaRepository;


public interface NutritionPlanRepository extends JpaRepository<NutritionPlan, Integer> {
    NutritionPlan getNutritionPlanById(Integer id);
}
