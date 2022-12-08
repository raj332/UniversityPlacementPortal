import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CriteriaApisService {

  constructor(private http :HttpClient) { }

  getCriteriaList(){
    return this.http.get("https://localhost:7212/api/Criteria") ;
  }

}