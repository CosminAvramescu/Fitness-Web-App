package com.example.backend.mapper;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "username", source = "username")
    UserDTO toUserDTO(User user);

    List<UserDTO> toListUserDTO(List<User> user);
}
