import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApisService } from 'src/app/services/common-apis.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  email!:String;
  password!:String
  constructor(private services:CommonApisService , private router:Router) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    let user ={
      email:this.email,
      password:this.password
    }
    this.services.loginAdmin(user).subscribe((data:any)=>{
      if(data.error){
        alert(data.error);
      }else if(data.success){
        localStorage.clear()
        localStorage.setItem("adminEmail",this.email.toString())
        localStorage.setItem("adminName",data.adminName)
        localStorage.setItem("admintoken",data.token)
  this.router.navigate(["/dashboard/admin"])
      }
     
     
    })
   }

}
