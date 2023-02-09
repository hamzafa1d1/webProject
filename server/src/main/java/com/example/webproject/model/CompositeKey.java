package com.example.webproject.model;

import java.io.Serializable;

public class CompositeKey implements Serializable {

    private int busId;
    private int idStations;
    private int id ;
    public CompositeKey(int busId, int idStations , int id) {
        this.busId = busId;
        this.idStations = idStations;
        this.id = id ;
    }

    public CompositeKey() {
    }
}
