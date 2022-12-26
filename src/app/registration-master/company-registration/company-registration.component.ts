import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyApisService } from 'src/app/services/company-apis.service';
@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss'],
})
export class CompanyRegistrationComponent implements OnInit {
  companyName!: String;
  companyAddress!: String;
  companyContactNo!: Number;
  companyWebsite!: String;
  companyDomain!: String;
  companyPassword!:String;
  companyEmail!: String;
  confirmPassword !:string;
  errorMsg!: string;
  validMsg!: string;
  isCommitee =false;
  constructor(private services:CompanyApisService , private router: Router) {
    console.log(this.router.url)
      if(this.router.url== "/dashboard/commitee/AddCompany"){
        this.isCommitee =true;
      }else{
        this.isCommitee=false;
      }
    }

  ngOnInit(): void {}
  handleSubmit() {
    let company = {
      name: this.companyName,
      address: this.companyAddress,
      contactNo: this.companyContactNo,
      domain: this.companyDomain,
      email: this.companyEmail,
      password:this.companyPassword,
      website: this.companyWebsite
    };
    this.services.registerCompany(company).subscribe((data:any)=>{
      if(data.error){
        alert(data.error);
        return;
      }
      this.router.navigate(['auth/login/company'])
    })
  }

  onconfirmPassword(pass: String, confirmpass: String) {

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
