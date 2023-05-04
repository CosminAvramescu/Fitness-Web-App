package com.example.backend.repository;

import com.example.backend.model.FileWorkout;
import com.example.backend.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

import java.io.File;
import java.util.List;

public interface FileWorkoutRepository extends JpaRepository<FileWorkout, Integer> {
    FileWorkout getFileWorkoutById(Integer id);

    List<FileWorkout> getAllByWorkout(Workout workout);
}
