package com.example.backend.auth;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class AuthController {
    private final UserService userService;
    private final UserRepository userRepository;

    Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<Auth> login(@RequestBody AuthRequest authRequest) {
        Optional<User> byUsername = userRepository.findByName(authRequest.getUsername());
        if (!byUsername.isPresent()) {
            logger.warn("Auth failed, user not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            userService.login(byUsername.get());
            String username = byUsername.get().getUsername();
            Integer userId = byUsername.get().getId();
            Enum role = byUsername.get().getRole();
            Auth auth = new Auth(Long.valueOf(userId), username, role);
            logger.info("User was login with successfully");
            return new ResponseEntity<>(auth, HttpStatus.OK);
        }
    }


    // handler method to handle user registration form request
    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        UserDTO user = new UserDTO();
        model.addAttribute("user", user);
        return "register";
    }

    // handler method to handle user registration form submit request
    @PostMapping("/register/save")
    public String registration(@Valid @ModelAttribute("user") UserDTO userDTO,
                               BindingResult result,
                               Model model){
        User existingUser = userService.findUserByEmail(userDTO.getEmail());

        if(existingUser != null && existingUser.getName() != null && !existingUser.getEmail().isEmpty()){
            result.rejectValue("email", null,
                    "There is already an account registered with the same email");
        }

        if(result.hasErrors()){
            model.addAttribute("user", userDTO);
            return "/register";
        }

        userService.saveUser(userDTO);
        return "redirect:/register?success";
    }

    @GetMapping("/users")
    public String users(Model model){
        List<UserDTO> users = userService.findAllUsers();
        model.addAttribute("users", users);
        return "users";
    }
}

