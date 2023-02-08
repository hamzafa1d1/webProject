package com.example.demo.repository;
import java.time.LocalTime;
import java.util.List ;
import com.example.demo.model.pathEntity;
import org.springframework.cglib.core.Local;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

public interface pathsRepository extends JpaRepository<pathEntity,Long> {
    List<pathEntity> findByTime(LocalTime time) ;
    List<pathEntity> findByTimeGreaterThanAndIdStations(LocalTime time , int idStations , Sort sort) ;
    List<pathEntity>findByTimeGreaterThanAndIdStationsAndBusId(LocalTime time, int idStations, int busId , Sort sort);

}
