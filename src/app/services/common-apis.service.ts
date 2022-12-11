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
  loginCommitee(user:any){
    return this.http.post("https://localhost:7212/api/CommiteeMember/Login",user)
  }
  getPptlist(){
    return this.http.get("https://localhost:7212/api/PrePlacementTalk")
  }
  insertPptlist(company:any){
    return this.http.post("https://localhost:7212/api/PrePlacementTalk",company)
  }
  updatePptlist(company:any){
    return this.http.put("https://localhost:7212/api/PrePlacementTalk",company)
  }
  getResultData(spid:any){
    return this.http.get("https://localhost:7212/api/StudentResultData/"+spid)
  }
}
