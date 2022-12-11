import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonApisService } from 'src/app/services/common-apis.service';
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
   
  resultData!:any;

  constructor(public dialog: MatDialog ,private services : CommonApisService) { 
   let spid = localStorage.getItem("spid");
   this.services.getResultData(spid).subscribe((data)=>{
    this.resultData =data;
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

      if(result!=undefined){
        result.technology=result.technology.split(',');
        this.InternshipData.push(result);
        };

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
}
