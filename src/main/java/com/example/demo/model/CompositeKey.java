package com.example.demo.model;

import java.io.Serializable;

public class CompositeKey implements Serializable {

    private int busId;
    private int idStations;
    public CompositeKey(int busId, int idStations) {
        this.busId = busId;
        this.idStations = idStations;
    }

    public CompositeKey() {
    }
}
