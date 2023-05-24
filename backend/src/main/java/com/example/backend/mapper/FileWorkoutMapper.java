package com.example.backend.mapper;

import com.example.backend.dto.FileWorkoutDTO;
import com.example.backend.dto.WorkoutDTO;
import com.example.backend.model.FileWorkout;
import com.example.backend.model.Workout;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface FileWorkoutMapper {
    @Mapping(target = "description", source = "description")
    FileWorkoutDTO toWorkoutDTO(FileWorkout workout);

    List<FileWorkoutDTO> toListWorkoutDTO(List<FileWorkout> workout);
}
