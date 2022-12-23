import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminApisService } from 'src/app/services/admin-apis.service';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

spid!:any;
mainData !:any;
sdata:any
  constructor(public dialogRef: MatDialogRef<StudentDetailComponent>,private router: Router,
@Inject(MAT_DIALOG_DATA) public data: any,private service:AdminApisService , private stuService : StudentApisService ) { 
    this.mainData=data;
      this.service.getStudentDetail(data.spid).subscribe((apidata:any)=>{
        this.sdata = apidata;
        console.log(this.sdata);
      })
    
    }
    ngOnInit(): void {

    }
   
handleApply(){

      this.service.changeIsInPlacement(this.mainData.spid).subscribe((data:any)=>{
        if(data.success){
          
          this.dialogRef.close();
        }
      
      })
}
  

}
