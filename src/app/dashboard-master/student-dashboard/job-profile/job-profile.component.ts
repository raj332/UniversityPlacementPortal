import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';
import { Uploader, UploaderOptions, UploaderResult } from "uploader";
import { AddExperienceComponent } from './add-experience/add-experience.component';

export interface  DialogData{
  CompanyName: string;
  StartDate: string;
  EndDate: string;
  technology: any[];
}
@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.scss']
})
export class JobProfileComponent implements OnInit {
   websiteLink!:string ;
   linkedinLink!:string ;
   resumeLink!:string ;
  resultData!:any;
 spid !:any;
  constructor(public dialog: MatDialog ,private services : CommonApisService ,private studentService : StudentApisService) { 
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
//dialog
  openDialog() {
   const dialogRef=this.dialog.open(AddExperienceComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(result => {
      this.InternshipData=[];
   this.studentService.getInternship(this.spid).subscribe((data:any)=>{
    data.forEach((element:any) => {
      element.technology=element.technology.split(',');
      this.InternshipData.push(element);
    });
   })
   
      // if(result!=undefined){
      //   result.technology=result.technology.split(',');
      //   this.InternshipData.push(result);
      //   };
    });



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
  onSubmit(){
 
    let item ={
      spid :this.spid,
      websiteLink :this.websiteLink,
      linkedinLink :this.linkedinLink,
      resumeLink :this.resumeLink
    }
    this.studentService.addJobProfile(item).subscribe((data:any)=>{
      alert("Job profile created")
      localStorage.setItem("jobProfileId",data.jobProfileId)
    }) 
  }
}
