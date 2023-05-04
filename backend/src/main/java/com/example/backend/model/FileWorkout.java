package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.jdbc.Work;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class FileWorkout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Lob
    byte[] fileWorkout;

    String filename;

    String description;

    @ManyToOne
    Workout workout;
}
