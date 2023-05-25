package com.example.backend.mapper;

import com.example.backend.dto.UserDTO;
import com.example.backend.dto.WorkoutDTO;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.model.Workout;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface WorkoutMapper {
    @Mapping(target = "description", source = "description")
    @Mapping(target = "price", source = "price")
    @Mapping(target = "id", source = "id")
    @Mapping(target = "timeToComplete", source = "timeToComplete")
    @Mapping(target = "workoutPicture", source = "workoutPicture")
    @Mapping(target = "trainerId", expression = "java(getTrainerId(workout))")
    WorkoutDTO toWorkoutDTO(Workout workout);

    List<WorkoutDTO> toListWorkoutDTO(List<Workout> workout);

    default Integer getTrainerId(Workout workout) {
        List<User> users=workout.getUsers();
        for (User user : users) {
            if (user.getRole() == Role.TRAINER) {
                return user.getId();
            }
        }
        return null;
    }
}
