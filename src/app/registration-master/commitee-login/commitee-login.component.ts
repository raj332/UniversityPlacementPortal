import { Component, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';

@Component({
  selector: 'app-commitee-login',
  templateUrl: './commitee-login.component.html',
  styleUrls: ['./commitee-login.component.scss']
})
export class CommiteeLoginComponent implements OnInit {
  spid!:Number;
  password!:String
  constructor(private services:CommonApisService) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    let user ={
      spid:this.spid,
      password:this.password
    }
    this.services.loginCommitee(user).subscribe((data)=>{
      console.log(data)
      alert("logedin")
    })
   }
}
