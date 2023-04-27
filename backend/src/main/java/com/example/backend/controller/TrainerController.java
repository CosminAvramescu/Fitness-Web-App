package com.example.backend.controller;

import com.example.backend.model.Trainer;
import com.example.backend.repository.TrainerRepository;
import com.example.backend.service.TrainerService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class TrainerController {
    private final TrainerService trainerService;
    @PostMapping("/pdf/upload")
    public Trainer handlePdfUpload(@RequestParam("file") MultipartFile file/*, Model model*/) throws IOException {
        Trainer trainer = new Trainer();
        trainer.setName(file.getOriginalFilename());
        trainer.setCertificate(file.getBytes());

        return trainerService.addTrainer(trainer);
//        // add the saved entity to the model for display
//        model.addAttribute("pdfFile", trainer);
//
//        return "pdf/uploadSuccess";
    }
}
