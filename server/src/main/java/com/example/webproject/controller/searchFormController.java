package com.example.webproject.controller;
import com.example.webproject.model.searchFormData;
import com.example.webproject.service.searchFormDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class searchFormController {
    @Autowired
    public searchFormDataService SearchFormDataService ;
    @PostMapping("/searchFormData")
    public ResponseEntity<Map<LocalTime,Object>> submitForm(@RequestBody searchFormData searchFormData){
        System.out.println("time: " + searchFormData.getTime());
        Map<LocalTime, Object> responseData = SearchFormDataService.EligeableBusses(searchFormData);
        return  ResponseEntity.ok().body(responseData);
    }

}
