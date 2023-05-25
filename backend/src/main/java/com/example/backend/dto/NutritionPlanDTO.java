package com.example.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
public class NutritionPlanDTO {
    Integer id;

    String description;

    String title;

    String timeToComplete;

    String price;

    Integer trainerId;
}
