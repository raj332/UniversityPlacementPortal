import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';
@Component({
  selector: 'app-view-job-offer',
  templateUrl: './view-job-offer.component.html',
  styleUrls: ['./view-job-offer.component.scss']
})
export class ViewJobOfferComponent implements OnInit {
spid!:any;
    mainData !:any;
companyData!:any;
  constructor(public dialogRef: MatDialogRef<ViewJobOfferComponent>,private router: Router,
@Inject(MAT_DIALOG_DATA) public data: any,private service:CompanyApisService , private stuService : StudentApisService ) { 
this.mainData =data ;
this.service.getOneCompanyDetail(this.mainData.companyId).subscribe((data)=>{
  this.companyData =data;
  this.spid =localStorage.getItem("spid")
});
    }
    ngOnInit(): void {

    }
   
handleApply(){
 
  let item = {
    spid :this.spid,
    offerId :this.mainData.offerId ,
    status :"applied",
    isOutSideProcess :false,
    isSelected :false,
    hasClearedRounds : false,
    isPlaced :false,
    companyId:this.mainData.companyId

      }
      this.stuService.applyJob(item).subscribe((data)=>{
        this.dialogRef.close();
      })
 
 
}
  

}
