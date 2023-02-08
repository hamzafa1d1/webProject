package com.example.webproject.service;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map ;

import com.example.webproject.model.stationEntity;
import com.example.webproject.repository.StationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class stationsCitiesStatesService {
    @Autowired
    StationsRepository stationsRepository ;
    public Map<String, Map<String, List<String>>> result(){
     Map<String,Map<String, List<String>>> res = new HashMap<>() ;
     List<stationEntity> allData = stationsRepository.findAll() ;
     for(stationEntity station:allData){
         if(res.get(station.getState()) == null){
             List<String> list = new ArrayList<>(){{
                 add(station.getStationName()) ;
             }} ;
             Map<String , List<String>> mymap = new HashMap<>(){{
                 put(station.getCity() , list );
             }};
             res.put(station.getState() ,mymap) ;
         }
         else{
             Map<String , List<String>> cities = res.get(station.getState()) ;
             if(cities.get(station.getCity()) == null){
                 List<String> stationsToAdd= new ArrayList<>() ;
                 stationsToAdd.add(station.getStationName()) ;
                 cities.put(station.getCity() , stationsToAdd) ;
             }
             else{
                 List<String > addingToStations = cities.get(station.getCity()) ;
                 addingToStations.add(station.getStationName()) ;
                 cities.put(station.getCity() , addingToStations) ;
             }
             res.put(station.getState() , cities) ;
         }

     }
     return res ;
    }
}
