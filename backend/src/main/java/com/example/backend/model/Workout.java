package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("*")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String title;

    String description;

    String price;

    String timeToComplete;

    @OneToMany
    List<FileWorkout> fileWorkouts=new ArrayList<>();

    @Lob
    byte[] workoutPicture;

    @ManyToMany
    List<User> users=new ArrayList<>();
}
