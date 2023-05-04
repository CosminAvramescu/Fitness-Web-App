package com.example.backend.repository;

import com.example.backend.model.FileWorkout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.File;

public interface FileWorkoutRepository extends JpaRepository<FileWorkout, Integer> {
    FileWorkout getFileWorkoutById(Integer id);
}
