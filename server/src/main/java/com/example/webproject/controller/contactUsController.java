package com.example.webproject.controller;

import com.example.webproject.model.contactUs;
import com.example.webproject.service.contactUsService;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.exceptions.UnirestException;
//import org.apache.http.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class contactUsController {
    @Autowired
    private contactUsService contactUsService ;
    @PostMapping("/contact-us")
    public ResponseEntity<String> contacUsResponse(@RequestBody contactUs contactUs) {
        System.out.println(contactUs.getEmail());
       String response =  contactUsService.sendingContactUs(contactUs);
       System.out.println(response);
       return  ResponseEntity.ok(response);
    }

}
