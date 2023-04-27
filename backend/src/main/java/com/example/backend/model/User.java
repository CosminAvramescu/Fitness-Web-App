package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.sql.Date;

@CrossOrigin("*")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    String name;

    String password;

    String email;

    Integer age;

    Float weight;

    Float height;

    Date birthday;

    String sex;
}
