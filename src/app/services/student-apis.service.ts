import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class StudentApisService {
  url = 'https://localhost:7212/api/StudentRegs';
  constructor(private http: HttpClient) {}

  registerStudent(stu: any) {
    return this.http.post(this.url, stu);
  }
  editStudentDetail(stu:any){
    
    return this.http.put(this.url,stu)
  }
  getMyDetail(spid:any){
    var myheaders = new HttpHeaders();
myheaders =myheaders.append("Authorization",localStorage.getItem("stoken")||"")
    return this.http.get("https://localhost:7212/api/StudentRegs/"+spid,{headers : myheaders})
  }
  loginStudent(user: any) {
    return this.http.post('https://localhost:7212/api/StudentLogin', user);
  }
  addInternship(item:any){
    var myheaders = new HttpHeaders();
myheaders =myheaders.append("Authorization",localStorage.getItem("stoken")||"")
    return this.http.post("https://localhost:7212/api/InternshipMaster",item,{headers:myheaders})
  }
  addJobProfile(item:any){
    var myheaders = new HttpHeaders();
myheaders =myheaders.append("Authorization",localStorage.getItem("stoken")||"")
    return this.http.post("https://localhost:7212/api/JobProfileMaster",item,{headers:myheaders})
  }
  getOneJobProfile(spid:any){
   
    return this.http.get("https://localhost:7212/api/JobProfileMaster/"+spid)
  }
  getInternship(spid:any){
  
    return this.http.get("https://localhost:7212/api/InternshipMaster/"+spid)
  }
  getAppliedCompanies(spid:any){
    var myheaders = new HttpHeaders();
myheaders =myheaders.append("Authorization",localStorage.getItem("stoken")||"")
    return this.http.get("https://localhost:7212/api/StudentApplication/applied/"+spid,{headers:myheaders})
  }
  getNotAppliedCompanies(spid:any){
    var myheaders = new HttpHeaders();
myheaders =myheaders.append("Authorization",localStorage.getItem("stoken")||"")
    return this.http.get("https://localhost:7212/api/StudentApplication/notapplied/"+spid,{headers:myheaders})
  }
  applyJob(item:any){
    var myheaders = new HttpHeaders();
myheaders =myheaders.append("Authorization",localStorage.getItem("stoken")||"")
    return this.http.post("https://localhost:7212/api/StudentApplication",item,{headers:myheaders})
  }

}
