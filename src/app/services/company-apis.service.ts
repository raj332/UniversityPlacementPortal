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
  getApplications(cid:any){
    return this.http.get("https://localhost:7212/api/StudentApplication/applications/"+cid)
  }
  getShortListedApplications(cid:any){
    return this.http.get("https://localhost:7212/api/StudentApplication/shortlisted/"+cid)

  }
  getSelectedApplications(cid:any){
    return this.http.get("https://localhost:7212/api/StudentApplication/selected/"+cid)

  }
  getCompanylist(){
     return this.http.get("https://localhost:7212/api/CompanyOffers/ppt")
  }
  getOneCompanyDetail(cid:any){
    return this.http.get("https://localhost:7212/api/Company/"+cid);
  } 
  updateStudentStatus(item :any){
   return this.http.put("https://localhost:7212/api/StudentApplication",item)
  }
}