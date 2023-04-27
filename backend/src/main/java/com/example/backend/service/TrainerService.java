package com.example.backend.service;

import com.example.backend.model.Trainer;
import com.example.backend.repository.TrainerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TrainerService {
    private final TrainerRepository trainerRepository;

    public Trainer addTrainer(Trainer trainer){
        return trainerRepository.save(trainer);
    }
}
