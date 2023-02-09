package com.example.webproject.model;
import jakarta.persistence.* ;

@Entity
@Table(name ="bus")
public class busEntity {

    @Id
    @Column(name = "id")
    private int id ;
    @Column(name= "bus_plate")
    private String busPlate ;
    @Column(name= "bus_name")
    private String busName ;
    @Column(name="capacity")
    private int capacity ;
    @Column(name= "image_path")
    private String imagePath ;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBusPlate() {
        return busPlate;
    }

    public void setBusPlate(String busPlate) {
        this.busPlate = busPlate;
    }

    public String getBusName() {
        return busName;
    }

    public void setBusName(String busName) {
        this.busName = busName;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }


}
