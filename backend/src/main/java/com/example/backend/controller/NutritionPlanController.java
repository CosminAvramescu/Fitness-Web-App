package com.example.backend.controller;

import com.example.backend.dto.NutritionPlanDTO;
import com.example.backend.mapper.NutritionPlanMapper;
import com.example.backend.model.FileWorkout;
import com.example.backend.model.NutritionPlan;
import com.example.backend.model.Workout;
import com.example.backend.service.NutritionPlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("nutrition")
@CrossOrigin(origins = "*")
public class NutritionPlanController {
    private final NutritionPlanService nutritionPlanService;

    private final NutritionPlanMapper nutritionPlanMapper;

    @PutMapping("setUser/{nutritionPlanId}/{userId}")
    public void setUser(@PathVariable("nutritionPlanId") Integer nutritionPlanId, @PathVariable("userId") Integer userId){
        nutritionPlanService.setUser(nutritionPlanId, userId);
    }

    @PostMapping("addNutritionPlan")
    public NutritionPlan addNutritionPlan(@RequestBody NutritionPlan nutritionPlan){
        return nutritionPlanService.addNutritionPlan(nutritionPlan);
    }

    @PutMapping("setFileWorkout/{nutritionPlanId}/{fileWorkoutId}")
    public void setFileWorkout(@PathVariable("nutritionPlanId") Integer nutritionPlanId,
                               @PathVariable("fileWorkoutId") Integer fileWorkoutId) {
        nutritionPlanService.setFileWorkout(nutritionPlanId, fileWorkoutId);
    }

    @GetMapping("all")
    public List<NutritionPlanDTO> getAll(){
        return nutritionPlanMapper.toListNutritionPlanDTO( nutritionPlanService.getAll());
    }

    @PutMapping("upload/{nutritionId}")
    public NutritionPlanDTO setWorkoutPicture(@RequestParam("file") MultipartFile file, @PathVariable("nutritionId") Integer nutritionId) {
        NutritionPlan nutritionPlan = nutritionPlanService.getNutritionPlanById(nutritionId);

        try {
            nutritionPlan.setNutritionPicture(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return nutritionPlanMapper.toNutritionPlanDTO(nutritionPlanService.addNutritionPlan(nutritionPlan));
    }

    @GetMapping("/downloadN/{id}")
    public ResponseEntity<byte[]> getImageW(@PathVariable("id") Integer id) {
        // Retrieve the image byte array based on the provided ID
        NutritionPlan nutritionPlan = nutritionPlanService.getNutritionPlanById(id);
        byte[] imageBytes=nutritionPlan.getNutritionPicture();

        // Set the appropriate headers for the image response
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG); // Adjust the media type based on your image format
        headers.setContentLength(imageBytes.length);

        // Return the image byte array as the response body with the appropriate headers
        return new ResponseEntity<>(imageBytes, headers, HttpStatus.OK);
    }
}
