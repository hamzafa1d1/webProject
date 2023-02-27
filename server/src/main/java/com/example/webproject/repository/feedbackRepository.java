package com.example.webproject.repository;

import com.example.webproject.model.feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface feedbackRepository extends JpaRepository<feedback, Long> {

    List<feedback> findAll();
    @Query("SELECT f.users_id, COUNT(f) FROM feedback f GROUP BY f.users_id")
    List<Object[]> countfeedbackByUsers();
    @Query("SELECT f.users_id ,f.review_text, f.rating ,f.crowding_alert ,u.firstName ,u.lastName FROM feedback f join AppUser u on f.users_id = u.id where f.bus_id = ?1")
    List<Object> getfeedbacks(Long our_bus_id);
    @Query("SELECT AVG(f.rating) FROM feedback f WHERE f.bus_id=?1 GROUP BY f.bus_id  ")
    List<Object[]> avgrating(Long our_bus_id);

    @Override
    feedback save(feedback feedback) ;

}