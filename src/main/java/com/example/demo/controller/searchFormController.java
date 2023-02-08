package com.example.demo.controller;
import com.example.demo.model.searchFormData;
import com.example.demo.service.searchFormDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;
import java.util.Map;
import java.util.Objects;

@RestController
public class searchFormController {
    @Autowired
    public searchFormDataService SearchFormDataService ;
    @PostMapping("/searchFormData")
    public ResponseEntity<Map<LocalTime,Object>> submitForm(@RequestBody searchFormData searchFormData){
        System.out.println("startcity: " + searchFormData.getStartStation());
        Map<LocalTime, Object> responseData = SearchFormDataService.EligeableBusses(searchFormData);
        return  ResponseEntity.ok().body(responseData) ;

    }

}
