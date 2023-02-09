package com.example.webproject.model;

import java.time.LocalTime;

public class searchFormData {
    private String startStation ;
    private String endStation ;
    private String startCity ;
    private String startState ;
    private String endCity ;
    private String endState ;
    private LocalTime time;




    public String getStartStation() {
        return startStation;
    }

    public void setStartStation(String startStation) {
        this.startStation = startStation;
    }

    public String getEndStation() {
        return endStation;
    }

    public void setEndStation(String endStation) {
        this.endStation = endStation;
    }

    public String getStartCity() {
        return startCity;
    }

    public void setStartCity(String startCity) {
        this.startCity = startCity;
    }

    public String getStartState() {
        return startState;
    }

    public void setStartState(String startState) {
        this.startState = startState;
    }

    public searchFormData(String startStation, String endStation, String startCity, String startState, String endCity, String endState, LocalTime time) {
        this.startStation = startStation;
        this.endStation = endStation;
        this.startCity = startCity;
        this.startState = startState;
        this.endCity = endCity;
        this.endState = endState;
        this.time = time;
    }

    public String getEndCity() {
        return endCity;
    }

    public void setEndCity(String endCity) {
        this.endCity = endCity;
    }

    public String getEndState() {
        return endState;
    }

    public void setEndState(String endState) {
        this.endState = endState;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }




}
