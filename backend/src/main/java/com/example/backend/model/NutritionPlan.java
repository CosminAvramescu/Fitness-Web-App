package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NutritionPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String title;

    String price;

    String timeToComplete;

    String description;

    @Lob
    byte[] nutritionPicture;


    @OneToMany
    List<FileWorkout> fileWorkouts=new ArrayList<>();

    @ManyToMany
    List<User> users=new ArrayList<>();
}
