package com.example.webproject.controller;

import com.example.webproject.model.AuthenticationRequest;
import com.example.webproject.model.RegistrationRequest;
import com.example.webproject.model.AuthenticationResponse;
import com.example.webproject.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegistrationRequest request) {
        try {
            return ResponseEntity.ok(service.register(request));
        } catch (IllegalStateException e) {
            String errorMessage = e.getMessage();
            AuthenticationResponse errorResponse = new AuthenticationResponse(errorMessage);
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);
        }
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        try {
            return ResponseEntity.ok(service.authenticate(request));
        } catch (IllegalStateException e) {
            String errorMessage = e.getMessage();
            AuthenticationResponse errorResponse = new AuthenticationResponse(errorMessage);
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);
        }
    }


}