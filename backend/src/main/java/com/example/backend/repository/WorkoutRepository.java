package com.example.backend.repository;

import com.example.backend.model.User;
import com.example.backend.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {
    @Query("SELECT w FROM Workout w JOIN w.users u WHERE u.id = :userId")
    List<Workout> findAllByUserId(@Param("userId") Integer userId);

//    @Transactional
//    @Modifying
//    @Query(value = "UPDATE Workout w SET w.users = (SELECT CONCAT(u.id, ',') FROM User u WHERE u.id = :userId) WHERE w.id = :workoutId", nativeQuery = true)
//    void setUser(@Param("workoutId") Integer workoutId, @Param("userId") Integer userId);
    Workout getWorkoutById(Integer id);
}
