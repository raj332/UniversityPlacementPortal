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
compantWisePlacementChart(){
  return this.http.get("https://localhost:7212/api/Statestics/compantWisePlacement/")

}
getAverageCTC(){
  return this.http.get("https://localhost:7212/api/Statestics/avgctc/")
}
gettopten(){
  return this.http.get("https://localhost:7212/api/Statestics/toptenplacement")
}
  
  
  getYearlyPlacementChart(){
return this.http.get("https://localhost:7212/api/Statestics/yearlyplacement");
  }
  getTotalPlacedStudentCount(){
    return this.http.get("https://localhost:7212/api/Statestics/totalplacedtillnow");
  }
  getTotalPlacedThisYear(){
    return this.http.get("https://localhost:7212/api/Statestics/totalplacedthisyear");

  }
  getTotalRegisteredStudent(){
    return this.http.get("https://localhost:7212/api/Statestics/totalRegisteredStudentThisyear");
  }
}
