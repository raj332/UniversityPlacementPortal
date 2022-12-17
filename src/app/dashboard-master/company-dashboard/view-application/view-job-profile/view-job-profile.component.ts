import { Component,Inject, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  companyId:any = localStorage.getItem("companyId")
 mainData!:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<ViewJobProfileComponent>, private services : CommonApisService ,private companyServices : CompanyApisService,private studentService : StudentApisService) { 
   
    this.mainData=data;
    console.log(this.mainData)
   this.services.getResultData(this.mainData.spid).subscribe((data)=>{
    this.resultData =data;
   })
   this.studentService.getInternship(this.mainData.spid).subscribe((data:any)=>{
    data.forEach((element:any) => {
      element.technology=element.technology.split(',');
      this.InternshipData.push(element);
    });
   })
   this.studentService.getOneJobProfile(this.mainData.spid).subscribe((data:any)=>{
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
  

  width = "600px";
  height = "375px";

  toggleBTN(){

  }
 
  onInterviewCall(){
    //insert in Interview

    let item ={
      applicationId:this.mainData.applicationId,
      offerId :this.mainData.offerId,
      spid:this.mainData.spid,
      companyId :this.companyId ,
      isOutSideProcess :false,
      isSelected : false,
      hasClearedRounds : true,
      isPlaced : false,
      status : "shortlisted For HR Interview"
    }
    this.companyServices.updateStudentStatus(item).subscribe((data:any)=>{
      this.dialogRef.close()
       alert("shortlisted");
       
    })
  }

}
