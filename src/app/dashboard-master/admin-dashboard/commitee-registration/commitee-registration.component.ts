import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApisService } from 'src/app/services/common-apis.service';

@Component({
  selector: 'app-commitee-registration',
  templateUrl: './commitee-registration.component.html',
  styleUrls: ['./commitee-registration.component.scss']
})
export class CommiteeRegistrationComponent implements OnInit {
  spid!:Number;
  password!:String
  constructor(private services:CommonApisService , private router:Router) { }

  ngOnInit(): void {
  }
  handleSubmit(){
    let user ={
      commiteeMemberId:null,
      spid:this.spid,
      password:this.password
    }
    this.services.registerCommitee(user).subscribe((data:any)=>{
      if(data.success){
        alert("Member Registered !")
        
        this.spid =0;
        this.password ="";
        
      }else if(data.error){
        alert(data.error)
      }

    })
   }
}
