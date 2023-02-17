import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BusModel} from "../../model/busModel/bus.model";
const baseUrl  = "http://localhost:8080/searchFormData" ;
import{map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  getSearchData(formData:any ) {
    return this.http.post<BusModel[]>(baseUrl, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      map((response:any )=> {
        const busModels: BusModel[] = [];

        for (const key of Object.keys(response)) {
          const bus = response[key];
          const busModel = new BusModel(
            bus.busName,
            bus.busPlate,
            bus.capacity,
            bus.imagePath,
            key
          );
          busModels.push(busModel);
        }

        return busModels;    })
    );
  }
}
