package com.example.backend.auth;

import com.example.backend.model.Role;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Auth {
    private Long userId;
    private String username;
    private Role role;
}