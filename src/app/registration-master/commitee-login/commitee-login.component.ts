import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApisService } from 'src/app/services/common-apis.service';

@Component({
  selector: 'app-commitee-login',
  templateUrl: './commitee-login.component.html',
  styleUrls: ['./commitee-login.component.scss']
})
export class CommiteeLoginComponent implements OnInit {
  spid!:Number;
  password!:String
  constructor(private services:CommonApisService , private router:Router) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    let user ={
      spid:this.spid,
      password:this.password
    }
    this.services.loginCommitee(user).subscribe((data:any)=>{
      if(data.error){
        alert(data.error);
        return;
      }
      console.log(data)
      localStorage.clear()
      localStorage.setItem("commiteeSpid",this.spid.toString())
      localStorage.setItem("cmttoken",data.token)
      localStorage.setItem("memberId",data.user.commiteeMemberId)
     this.router.navigate(["/dashboard/commitee"])
    })
   }
}
