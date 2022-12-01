import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonApisService {

  constructor(private http :HttpClient) { }

  getCourses(){
    return this.http.get("https://localhost:7212/api/Course") ;
  }
}
