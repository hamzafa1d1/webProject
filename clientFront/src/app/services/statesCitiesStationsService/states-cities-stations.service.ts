import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
const baseUrl  = "http://localhost:8080/stations-cities-states" ;
import { State} from "../../model/statesCitiesStations/states.model";

@Injectable({
  providedIn: 'root'
})
export class StatesCitiesStationsService {
  constructor(private http: HttpClient) { }

   getStatesCitiesStations( ) : Observable<State[]> {
    return  this.http.get<State[]>(baseUrl,  {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
