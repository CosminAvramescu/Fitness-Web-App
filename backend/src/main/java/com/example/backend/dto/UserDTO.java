package com.example.backend.dto;

import com.example.backend.model.Role;
import jakarta.persistence.Lob;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.sql.Date;

@Data
@NoArgsConstructor
public class UserDTO {

    private Role role;

    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String contactPhone;

    private String password;

    private String county;

    private String city;

    private String street;

    private Integer age;

    private Float height;

    private Float weight;

    private Date birthday;
}
