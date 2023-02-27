package com.example.webproject.controller;

import com.example.webproject.model.feedback;
import com.example.webproject.service.feedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("feedback")
public class feedbackController {

    @Autowired
    private feedbackService feedbackService;

    @GetMapping
    public List<feedback> getAllfeeds() {
        return feedbackService.getAllfeeds();
    }
    @GetMapping("/count/users_id")
    public List<Object[]> countfeedbackByUsers() {
        return feedbackService.countfeedbackByUsers();
    }
    @GetMapping("/models/feedback/{our_bus_id}")
    public ResponseEntity<List<Object>> getfeedbacks(Long our_bus_id){
        return ResponseEntity.ok().body(feedbackService.getfeedbacks( our_bus_id));
    }
    @GetMapping("/models/avg/{our_bus_id}")
    public List<Object[]> avgrating(Long our_bus_id){
        return feedbackService.avgrating( our_bus_id);
    }
    @PostMapping("/add")
    public feedback addfeedback(@RequestBody feedback feedback) {
        return feedbackService.addfeedback(feedback);
    }

}