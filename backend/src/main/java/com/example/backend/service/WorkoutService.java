package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.Workout;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.WorkoutRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.jdbc.Work;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WorkoutService {
    private final WorkoutRepository workoutRepository;

    private final UserRepository userRepository;

    public List<Workout> getALlWorkouts() {
        return workoutRepository.findAll();
    }

    public List<Workout> getAllByUser_Id(Integer id){
        return workoutRepository.findAllByUserId(id);
    }

    public void setUser(Integer workoutId, Integer userId){
        User user=userRepository.getUserById(userId);
        Workout workout=workoutRepository.getWorkoutById(workoutId);
        List<User> userList=workout.getUsers();
        userList.add(user);
        workout.setUsers(userList);
        workoutRepository.save(workout);
    }

    public Workout addWorkout(Workout workout){
        return workoutRepository.save(workout);
    }

    public Workout getWorkoutById(Integer id){
        return workoutRepository.getWorkoutById(id);
    }
}
