package com.example.webproject.controller;

import com.example.webproject.model.AppUser;
import com.example.webproject.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("users")
public class AppUserController {
    @Autowired
    private AppUserService userService;
    @GetMapping
    public List<AppUser> getAllUsers() {
        return userService.getAllUsers();
    }
}