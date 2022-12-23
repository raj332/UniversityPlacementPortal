import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  cid = localStorage.getItem("companyId");
  constructor(public dialog: MatDialog , private services : CompanyApisService ,private commonServices : CommonApisService) { }

  btnName = "Edit";
  companyData!:any;
  IsEditable= false;
  ngOnInit(): void {
    this.fetchCompanyDetail()
  }
fetchCompanyDetail(){
this.services.getOneCompanyDetail(this.cid).subscribe((data:any)=>{
  this.companyData =data ;

})
}

  OnEditRequest() {
    this.IsEditable == false ? this.IsEditable = true : this.IsEditable = false;
    this.IsEditable == true ? this.btnName = "cancel" : this.btnName = "Edit";
  }
  handleEdit(){

  //  let newData = {
  //     name :this.companyData.name,
  //     address :this.companyData.addess,
  //     website :this.companyData.website,
  //     domain :this.companyData.domain,
  //     email:this.companyData.email 
  //   }
    console.log(this.companyData)
    this.services.editCompanyDetail(this.companyData).subscribe((data:any)=>{
      if(data.success){
        alert("Edited Successfully")
       this.OnEditRequest()
      
      }else{
        alert(data.error)
        
      }
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      restoreFocus: false,
      data:this.companyData,
      width: '30rem',
    });
    dialogRef.afterClosed().subscribe(result => {

    })
  }

}
