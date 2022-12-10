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

  ngOnInit(): void {
  }
 handleSubmit(){
  let user ={
    spid:this.spid,
    password:this.password
  }
  this.services.loginStudent(user).subscribe((data)=>{
  this.router.navigate(['dashboard/student'])
  })
 }
}
