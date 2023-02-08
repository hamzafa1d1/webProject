package com.example.webproject.repository;

import com.example.webproject.model.stationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StationsRepository extends JpaRepository<stationEntity,Long> {
    stationEntity findByStationNameContaining(String stationName) ;
//    @Query("select distinct state from stationEntity ")
//    List<String> findDistinctValuesInColumn() ;
//    List<stationEntity> findByState(String state ) ;
//    List<stationEntity> findByCity(String city )  ;
    List<stationEntity> findAll() ;

}
