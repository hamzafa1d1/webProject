package com.example.webproject.controller;

import com.example.webproject.model.busEntity;
import com.example.webproject.service.busService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("bus")
public class busController {
    @Autowired
    private busService busService;

    @GetMapping
    public List<busEntity> getAllbus() {
        return busService.getAllbus();
    }
}