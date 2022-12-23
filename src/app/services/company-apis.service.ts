import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
var headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})
export class CompanyApisService {

  constructor(private http :HttpClient) { }

  getAllOffers(cid:any){
    return this.http.get("https://localhost:7212/api/CompanyOffers/"+cid)
  }
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