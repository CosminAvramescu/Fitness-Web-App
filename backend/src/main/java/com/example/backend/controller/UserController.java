package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @PostMapping("/pdf/upload")
    public User handlePdfUpload(@RequestParam("file") MultipartFile file/*, Model model*/) throws IOException {
        UserDTO userDTO = new UserDTO();
        userDTO.setName(file.getOriginalFilename());
        userDTO.setCertificate(file.getBytes());

        return userService.saveUser(userDTO);
//        // add the saved entity to the model for display
//        model.addAttribute("pdfFile", trainer);
//
//        return "pdf/uploadSuccess";
    }
}
