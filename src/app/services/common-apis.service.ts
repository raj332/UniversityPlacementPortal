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
  loginAdmin(user:any){
    return this.http.post("https://localhost:7212/api/Admin/Login",user)
  }
  registerCommitee(user:any){
    return this.http.post("https://localhost:7212/api/CommiteeMember/register",user)
  }
  
  getPptlist(){
    return this.http.get("https://localhost:7212/api/PrePlacementTalk")
  }
  insertPptlist(company:any){
    return this.http.post("https://localhost:7212/api/PrePlacementTalk",company)
  }
  getInvotinglist(){
    return this.http.get("https://localhost:7212/api/PrePlacementTalk/votinglist")
  }
  getSheduledlist(){
    return this.http.get("https://localhost:7212/api/PrePlacementTalk/sheduledlist")
  }
  updatePptlist(company:any){
    return this.http.put("https://localhost:7212/api/PrePlacementTalk",company)
  }
  getResultData(spid:any){
    return this.http.get("https://localhost:7212/api/StudentResultData/"+spid)
  }
  castVote(spid:any ,data:any){
    return this.http.put("https://localhost:7212/api/PrePlacementTalk/vote/"+spid,data)
  }
  getStudentNotVotedCompany(spid:any){
    return this.http.get("https://localhost:7212/api/PrePlacementTalk/"+spid)

  }
  getCompanyList(){
    return this.http.get("https://localhost:7212/api/Company");
  }
getStudentYearlyPlacementChartData(id:any){
return this.http.get("https://localhost:7212/api/Statestics/yearlyPlaced/"+id);
}
getCurrentYearApplicationRatio (id:any){
  return this.http.get("https://localhost:7212/api/Statestics/currentYearApplication/"+id);
}
}
