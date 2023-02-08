package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.* ;

import java.time.LocalTime;

@Entity
@Table(name ="path")
@IdClass(CompositeKey.class)
public class pathEntity {
    @Id
    @Column(name= "bus_id")
    private int busId ;
    @Id
    @Column(name= "id_stations")
    private int idStations ;
    @Column(name="time")
    private LocalTime time ;


    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public int getBusId() {
        return busId;
    }

    public void setBusId(int busId) {
        this.busId = busId;
    }

    public int getIdStations() {
        return idStations;
    }

    public void setIdStations(int idStations) {
        this.idStations = idStations;
    }
}
