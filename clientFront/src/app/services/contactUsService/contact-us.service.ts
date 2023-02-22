import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const baseUrl = "http://localhost:8080/contact-us"

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) {
  }
  sendContactInfos(formInfo: any) {
    console.log("working!!")
    return this.http.post(baseUrl, formInfo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
}
