package com.example.backend.mapper;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "username", source = "username")
    @Mapping(target = "personalDescription", source = "personalDescription")
    @Mapping(target = "workoutNo", source = "workoutNo")
    @Mapping(target = "nutritionNo", source = "nutritionNo")
    @Mapping(target = "id", source = "id")
    UserDTO toUserDTO(User user);

    List<UserDTO> toListUserDTO(List<User> user);
}
