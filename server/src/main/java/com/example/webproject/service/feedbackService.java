package com.example.webproject.service;

import com.example.webproject.model.feedback;
import com.example.webproject.repository.feedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class feedbackService {

    @Autowired
    private feedbackRepository feedRepository;

    public List<feedback> getAllfeeds() {
        return feedRepository.findAll();
    }
    public List<Object[]> countfeedbackByUsers() {
        return feedRepository.countfeedbackByUsers();
    }
    public List<Object[]> getfeedbacks(Long our_bus_id){
        return feedRepository.getfeedbacks( our_bus_id);
    }
    public List<Object[]> avgrating(Long our_bus_id){
        return feedRepository.avgrating( our_bus_id);
    }
    public  feedback addfeedback(feedback feedback){
        return feedRepository.save(feedback);
    }
}