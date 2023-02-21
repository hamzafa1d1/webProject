package com.example.webproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.webproject.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}