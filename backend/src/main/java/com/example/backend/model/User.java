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

    @Lob
    byte[] certificate;

    @Lob
    byte[] userPicture;

    private String personalDescription;

    private Integer workoutNo;

    private Integer nutritionNo;

    @ManyToMany
    List<Workout> workoutList = new ArrayList<>();

    @ManyToMany
    List<NutritionPlan> nutritionPlans = new ArrayList<>();

    public User(Integer id, Role role, String firstName, String lastName, String username, String email,
                String contactPhone, String password, String county, String city, String street, Integer age,
                Float height, Float weight, Date birthday, String personalDescription) {
        this.id = id;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.contactPhone = contactPhone;
        this.password = password;
        this.county = county;
        this.city = city;
        this.street = street;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.birthday = birthday;
        this.personalDescription = personalDescription;
    }
}
