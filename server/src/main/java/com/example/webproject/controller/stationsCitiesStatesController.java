package com.example.webproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.webproject.service.* ;

import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")
@RestController()
@RequestMapping("/stations-cities-states")
public class stationsCitiesStatesController {
    @Autowired
    public stationsCitiesStatesService stationsCitiesStatesService ;

    @GetMapping
    public Map<String, Map<String , List<String>>> getStationsCititesStates(){
        return stationsCitiesStatesService.result() ;
    }

}
