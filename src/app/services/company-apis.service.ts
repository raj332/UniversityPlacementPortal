import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CompanyApisService {

  constructor(private http :HttpClient) { }

  createOffer(offer:any){
    return this.http.post("https://localhost:7212/api/CompanyOffers",offer)
  }
  registerCompany(company:any){
    return this.http.post("https://localhost:7212/api/Company",company)
  }
  loginCompany(user:any){
    return this.http.post("https://localhost:7212/api/Company/login",user)
  }
}