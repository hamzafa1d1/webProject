package com.example.webproject.service;
import com.example.webproject.model.busEntity;
import com.example.webproject.repository.BussesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class busService {

    @Autowired
    private BussesRepository  busrepo ;

    public List<busEntity> getAllbus() {
        return busrepo.findAll();
    }
}