import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentApisService } from 'src/app/services/student-apis.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {
  spid!:Number;
  password!:String
  constructor(private services: StudentApisService, private router: Router) { }
 errorMessage:Boolean= false ;
  ngOnInit(): void {
  }
 handleSubmit(){
  let user ={
    spid:this.spid,
    password:this.password
  }
  this.services.loginStudent(user).subscribe((data:any)=>{
    if(data.error){
        this.errorMessage =data.error;
    }else{
      localStorage.clear()
      localStorage.setItem("stoken",data.token)
      localStorage.setItem("profilePic",data.user.photo)
      localStorage.setItem("spid",this.spid.toString()) 
      localStorage.setItem("isInPlacementDrive",data.user.isInPlacementDrive)
      this.services.getOneJobProfile(this.spid).subscribe((data:any)=>{
          if(data){
            localStorage.setItem("jobProfileId",data.jobProfileId);
          }
      })
      localStorage.setItem("studentName",data.user.studentName)
      this.router.navigate(['dashboard/student'])
    }
  
  })
 }
}
