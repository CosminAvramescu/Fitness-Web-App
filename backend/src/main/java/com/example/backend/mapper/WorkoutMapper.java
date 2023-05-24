package com.example.backend.mapper;

import com.example.backend.dto.UserDTO;
import com.example.backend.dto.WorkoutDTO;
import com.example.backend.model.User;
import com.example.backend.model.Workout;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface WorkoutMapper {
    @Mapping(target = "description", source = "description")
    WorkoutDTO toWorkoutDTO(Workout workout);

    List<WorkoutDTO> toListWorkoutDTO(List<Workout> workout);
}
