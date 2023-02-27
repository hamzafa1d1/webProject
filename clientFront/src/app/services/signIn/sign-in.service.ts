import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const baseUrl = "http://localhost:8080/api/v1/auth/authenticate"
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }
  public SignIn(data : any ){
    return this.http.post(baseUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
