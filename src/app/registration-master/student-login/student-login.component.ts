import { Component, OnInit } from '@angular/core';
import { StudentApisService } from 'src/app/services/student-apis.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {
  spid!:Number;
  password!:String
  disabled!:boolean;
  constructor(private services: StudentApisService) { }

  ngOnInit(): void {
  }
 handleSubmit(){
  let user ={
    spid:this.spid,
    password:this.password
  }
  this.services.loginStudent(user).subscribe((data)=>{
    console.log(data)
    alert("logedin")
  })
 }
}
