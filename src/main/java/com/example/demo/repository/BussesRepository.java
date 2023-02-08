package com.example.demo.repository;

import com.example.demo.model.busEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BussesRepository extends JpaRepository<busEntity,Long> {
    busEntity findById(int id) ;
}