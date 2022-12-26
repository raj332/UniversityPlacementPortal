import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public companyData: any, private services : CompanyApisService ,private dialRef :MatDialogRef <ChangePasswordComponent>) { 
  }
  IsAlert = false;
  errorMsg!: string;
  validMsg!: string;
  lable = "Current Password";
  OTP = '';
  ngOnInit(): void {
  }
  SetAlert() {
    this.IsAlert = true;
    this.lable = "Enter Otp";
}

newPassword !:string ;
confirmPassword !:string;
oldPassword!:string;
handlePassChange(){
  console.log(this.oldPassword)
  if(this.oldPassword == this.companyData.password ){
    if(this.newPassword == this.confirmPassword){
     this.companyData.password =this.newPassword
  console.log(this.companyData)
  this.services.editCompanyDetail(this.companyData).subscribe((data:any)=>{
    if(data.success){
      alert("Password changed Successfully")    ;
      this.dialRef.close()
    }else{
      alert(data.error)
      
    }
  })
    }else{
      alert(" Please, Confirm Password again !")
    }
   
  }else{
    alert(" Current password is wrong !")
  }
  
}
onconfirmPassword(pass: string, confirmpass: string) {

  if (!this.confirmPassword) {
    this.errorMsg = '';
  }
  else if (pass != confirmpass) {
    this.validMsg = '';
    this.errorMsg="Doesn't Match With Yor Password!"
  }
  else {
    this.errorMsg = '';
    this.validMsg = 'Password Matched!';
  }
}

}
