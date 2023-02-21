package com.example.webproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;
import com.example.webproject.model.Feedback;

import com.example.webproject.repository.FeedbackRepository;

@RestController
@RequestMapping("/admin")
public class UserFeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @DeleteMapping("/delete-user-feedback/{id}")
    public ResponseEntity<String> deleteUserFeedback(@PathVariable Long id) {
        Optional<Feedback> optionalFeedback = feedbackRepository.findById(id);
        if (optionalFeedback.isPresent()) {
            feedbackRepository.deleteById(id);
            return new ResponseEntity<>("Feedback deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Feedback not found", HttpStatus.NOT_FOUND);
        }
    }
}