package com.example.backend.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@Entity
@EqualsAndHashCode
@NoArgsConstructor
@Builder
@ToString
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    private String name;


    private String password;


    @Enumerated(EnumType.STRING)
    private Role role;


    private String email;

    @Lob
    byte[] certificate;

    private Integer age;

    private Float weight;

    private Float height;

    private String sex;

    @ManyToMany
    List<Workout> workoutList=new ArrayList<>();
}
