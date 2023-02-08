package com.example.demo.model;
import jakarta.persistence.* ;

@Entity
@Table(name ="stations")
public class stationEntity {
    @Id
    @Column(name = "id_stations")
    private int idStations;

    public int getIdStations() {
        return idStations;
    }

    public void setIdStations(int idStaions) {
        this.idStations = idStaions;
    }

    public String getStationName() {
        return stationName;
    }

    public void setStationName(String stationName) {
        this.stationName = stationName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Column(name= "station_name")
    private String stationName ;
    @Column(name="city")
    private String city ;
    @Column(name="state")
    private String state ;

}
