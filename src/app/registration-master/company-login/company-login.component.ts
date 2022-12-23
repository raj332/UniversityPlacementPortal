import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyApisService } from 'src/app/services/company-apis.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {

  companyPassword!:String;
  companyEmail!: String;
  constructor(private services:CompanyApisService ,private router:Router) {
    
    }
  ngOnInit(): void {
  }
  async handleSubmit() {
    let company = {
      email: this.companyEmail,
      password:this.companyPassword
   };
    this.services.loginCompany(company).subscribe((data:any)=>{
      if(data.error){
        alert(data.error)
      }else{
        localStorage.clear();
        localStorage.setItem("cmptoken",data.token)
        localStorage.setItem("companyId",data.user.companyId)
        localStorage.setItem("companyName",data.user.name)
        this.router.navigate(['dashboard/company'])
      }
  
    })
  }

}
