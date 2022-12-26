import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentApisService } from 'src/app/services/student-apis.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public stuData: any, private services : StudentApisService ,private dialRef :MatDialogRef <ChangePasswordComponent>) { 
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
  if(this.oldPassword == this.stuData.password ){
    if(this.newPassword == this.confirmPassword){
      let newStu = {
        spid: this.stuData.spid,
    studentName: this.stuData.studentName,
    courseId: this.stuData.courseId,
    contactNo: this.stuData.contactNo,
    email:this.stuData.email,
    password: this.newPassword,
    photo: this.stuData.photo
      }
      console.log(newStu)
      this.services.editStudentDetail(this.stuData).subscribe((data:any)=>{
        if(data.success){
          alert(" Password Chnaged Successfully")
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
