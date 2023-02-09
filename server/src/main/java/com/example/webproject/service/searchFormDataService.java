package com.example.webproject.service;
import com.example.webproject.model.busEntity;
import com.example.webproject.model.pathEntity;
import com.example.webproject.model.searchFormData;
import com.example.webproject.model.stationEntity;
import com.example.webproject.repository.BussesRepository;
import com.example.webproject.repository.StationsRepository;
import com.example.webproject.repository.pathsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;


import java.time.LocalTime;
import java.util.HashMap;
import java.util.List ;
import java.util.Map;


@Service
public class searchFormDataService {
   @Autowired
    private pathsRepository pathsRepository ;
   @Autowired
   private BussesRepository bussesRepository ;
   @Autowired
   private StationsRepository stationsRepository;

   public Map<LocalTime , Object> EligeableBusses(searchFormData searchFormData){
       Map<LocalTime, Object> eligeableBusses = new HashMap<>() ;
       Sort sort = Sort.by(Sort.Direction.ASC,"time");
//       System.out.println("########" + searchFormData.getStartStation());
       stationEntity StartStation = stationsRepository.findByStationNameContaining(searchFormData.getStartStation()) ;
       stationEntity EndStation = stationsRepository.findByStationNameContaining(searchFormData.getEndStation()) ;
       LocalTime time = searchFormData.getTime() ;
       List<pathEntity> BussesStartStation= pathsRepository.findByTimeGreaterThanAndIdStations(time, StartStation.getIdStations(),sort);
       Map<Integer,Integer> visited= new HashMap<>();
       for(pathEntity path:BussesStartStation){
           int busid=path.getBusId() ;
           LocalTime bustime= path.getTime();
           if(pathsRepository.findByTimeGreaterThanAndIdStationsAndBusId(bustime , EndStation.getIdStations() , busid ,sort)!=null && visited.get(busid)==null){
               visited.put(busid,1);
               busEntity bus= bussesRepository.findById(busid);
               Map<String,Object> eligeableBus = new HashMap<>(){{
                   put("busPlate" , bus.getBusPlate());
                   put("busName" , bus.getBusName()) ;
                   put("capacity" , bus.getCapacity()) ;
                   put ("imagePath" , bus.getImagePath()) ;
               }};
               eligeableBusses.put(bustime,eligeableBus) ;
           };
       }
       return eligeableBusses ;
   }

}
