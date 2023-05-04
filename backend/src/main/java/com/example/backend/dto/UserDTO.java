package com.example.backend.dto;

import com.example.backend.model.Role;
import jakarta.persistence.Lob;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.Date;

@Data
@NoArgsConstructor
public class UserDTO {

    @NonNull
    private String name;
    @NonNull
    private Role role;
    @NonNull
    private String email;
    @Lob
    byte[] certificate;
    private Integer age;
    private Float weight;
    private Float height;
    private Date birthday;
    private String sex;

}
