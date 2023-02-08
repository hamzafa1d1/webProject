package com.example.webproject.repository;

import com.example.webproject.model.busEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BussesRepository extends JpaRepository<busEntity,Long> {
    busEntity findById(int id) ;
}