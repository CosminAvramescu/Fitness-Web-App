package com.example.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class WorkoutDTO {
    Integer id;

    String title;

    String description;

    String price;

    String timeToComplete;

    byte[] workoutPicture;

    Integer trainerId;
}
