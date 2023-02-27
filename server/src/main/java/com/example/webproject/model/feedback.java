package com.example.webproject.model;

import jakarta.persistence.*;

import java.sql.Time;
@Entity
@Table(name = "feedback")
public class feedback {
    @Column(name = "users_id")

    private Long users_id ;
    @Column(name = "bus_id")

    private Integer bus_id;
    @Column(name = "review_text")

    private String review_text;
    @Column(name = "rating")

    private Integer rating =0 ;
    @Column(name = "crowding_alert")

    private Time crowding_alert ;
    @Id
    @GeneratedValue
    private Long id;



}