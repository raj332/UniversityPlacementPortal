import { Component, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';

@Component({
  selector: 'app-view-job-profile',
  templateUrl: './view-job-profile.component.html',
  styleUrls: ['./view-job-profile.component.scss']
})
export class ViewJobProfileComponent implements OnInit {
  websiteLink!:string ;
   linkedinLink!:string ;
   resumeLink!:string ;
  resultData!:any;
 spid !:any;
  constructor( private services : CommonApisService ,private studentService : StudentApisService) { 
   this.spid = localStorage.getItem("spid");
   this.services.getResultData(this.spid).subscribe((data)=>{
    this.resultData =data;
   })
   this.studentService.getInternship(this.spid).subscribe((data:any)=>{
    data.forEach((element:any) => {
      element.technology=element.technology.split(',');
      this.InternshipData.push(element);
    });
   })
   this.studentService.getOneJobProfile(this.spid).subscribe((data:any)=>{
    this.websiteLink = data.websiteLink ;
this.linkedinLink =data.linkedinLink;
this.resumeLink =data.resumeLink;
   })

  }
  isCgpaSelected=false;
  sem='';
  cgpa = 0;
  InternshipData:any=[];
  technology:any[]=[];
  ngOnInit(): void {
  }
  file: any;
  MenuList: any = [
    "SEM 1 CGPA",
    "SEM 2 CGPA",
    "SEM 3 CGPA",
    "SEM 4 CGPA",
    "SEM 5 CGPA",
    "SEM 6 CGPA",
    "SEM 7 CGPA",
    "SEM 8 CGPA",
    "SEM 9 CGPA",
    "SEM 10 CGPA",
  ]
  onFileAdd(file: any) {
    this.file = file;
  }

  onFileRemove() {
    this.file = null;
  }

  width = "600px";
  height = "375px";

  toggleBTN(){

  }
  onShortlist(){
 
    // insert in shortlist tb

  }
  onInterviewCall(){
    //insert in Interview
  }

}
