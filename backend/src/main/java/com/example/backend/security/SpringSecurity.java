//package com.example.backend.security;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//import org.springframework.stereotype.Component;
//
//@Configuration
//@EnableWebSecurity
//@Component
//public class SpringSecurity {
//
//    private UserDetailsService userDetailsService;
//
//    public PasswordEncoder passwordEncoder;
//
//    public SpringSecurity(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
//        this.passwordEncoder = passwordEncoder;
//        this.userDetailsService = userDetailsService;
//    }
//
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http.csrf().disable()
//                .authorizeHttpRequests((authorize) ->
//                        authorize.requestMatchers("/register/**").permitAll()
//                                .requestMatchers("/index").permitAll()
//                                .requestMatchers("/users").permitAll()
//                ).formLogin(
//                        form -> form
//                                .loginPage("/login")
//                                .loginProcessingUrl("/login")
//                                .defaultSuccessUrl("/users")
//                                .permitAll()
//                ).logout(
//                        logout -> logout
//                                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//                                .permitAll()
//                );
//        return http.build();
//    }
//
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//        auth
//                .userDetailsService(userDetailsService)
//                .passwordEncoder(passwordEncoder.bCryptPasswordEncoder());
//    }
//
//}
//
