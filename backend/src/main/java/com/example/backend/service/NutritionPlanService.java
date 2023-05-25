package com.example.backend.service;

import com.example.backend.dto.NutritionPlanDTO;
import com.example.backend.model.FileWorkout;
import com.example.backend.model.NutritionPlan;
import com.example.backend.model.User;
import com.example.backend.model.Workout;
import com.example.backend.repository.FileWorkoutRepository;
import com.example.backend.repository.NutritionPlanRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NutritionPlanService {
    private final NutritionPlanRepository nutritionPlanRepository;

    private final UserRepository userRepository;

    private final FileWorkoutRepository fileWorkoutRepository;

    public void setFileWorkout(Integer nutritionPlanId, Integer fileWorkoutId){
        NutritionPlan nutritionPlan=nutritionPlanRepository.getNutritionPlanById(nutritionPlanId);
        FileWorkout fileWorkout=fileWorkoutRepository.getFileWorkoutById(fileWorkoutId);
        List<FileWorkout> fileWorkouts=nutritionPlan.getFileWorkouts();
        fileWorkouts.add(fileWorkout);
        nutritionPlan.setFileWorkouts(fileWorkouts);
        nutritionPlanRepository.save(nutritionPlan);
    }

    public void setUser(Integer nutritionPlanId, Integer userId){
        User user=userRepository.getUserById(userId);
        NutritionPlan nutritionPlan=nutritionPlanRepository.getNutritionPlanById(nutritionPlanId);
        List<User> userList=nutritionPlan.getUsers();
        userList.add(user);
        nutritionPlan.setUsers(userList);
        nutritionPlanRepository.save(nutritionPlan);
    }

    public NutritionPlan addNutritionPlan(NutritionPlan NutritionPlan){
        return nutritionPlanRepository.save(NutritionPlan);
    }

    public List<NutritionPlan> getAll(){
        return nutritionPlanRepository.findAll();
    }

    public NutritionPlan getNutritionPlanById(Integer id){
        return nutritionPlanRepository.getNutritionPlanById(id);
    }
}
