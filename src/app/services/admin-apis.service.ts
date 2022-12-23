import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AdminApisService {

  constructor(private http:HttpClient) { }

  getAllStudents(){
   return this.http.get("https://localhost:7212/api/StudentRegs");
  }
  getStudentDetail(spid:any){
    return this.http.get("https://localhost:7212/api/StudentRegs/studentdetail/"+spid)
  }
  changeIsInPlacement(spid:any){
    return this.http.get("https://localhost:7212/api/StudentRegs/changeIsInPlacement/"+spid)
  }

}
