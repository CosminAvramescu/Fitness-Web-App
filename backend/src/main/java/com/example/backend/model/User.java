package com.example.backend.model;


import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
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

    @Enumerated(EnumType.STRING)
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

    //private String sex;

    @Lob
    byte[] certificate;


    @ManyToMany
    List<Workout> workoutList=new ArrayList<>();

    @ManyToMany
    List<NutritionPlan> nutritionPlans=new ArrayList<>();
}
