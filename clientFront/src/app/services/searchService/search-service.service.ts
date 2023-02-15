import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const baseUrl  = "http://localhost:8080/searchFormData" ;
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }
  getSearchData(formData:any ) {
    return this.http.post(baseUrl, formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
