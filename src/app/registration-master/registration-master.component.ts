import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule,Event ,Navigation } from '@angular/router';
@Component({
  selector: 'app-registration-master',
  templateUrl: './registration-master.component.html',
  styleUrls: ['./registration-master.component.scss']
})
export class RegistrationMasterComponent implements OnInit {

  constructor(private router: Router) { 
    if(localStorage.getItem('stoken')){
    this.router.navigate(['/dashboard/student'])
    }else if(localStorage.getItem("cmttoken")){
      this.router.navigate(['/dashboard/commitee'])
    }else if(localStorage.getItem("cmptoken")){
      this.router.navigate(['/dashboard/company'])
    }else if(localStorage.getItem("admintoken")){
      this.router.navigate(['/dashboard/admin'])
    }
    this.router.events.subscribe((event:Event)=>{
if(event instanceof NavigationEnd){
  this.isRegistrationform = ( this.router.url== "/auth/registration/company" ||this.router.url== "/auth/registration/student" )? true :false;
  console.log(this.router.url)
}
    })
  }
isRegistrationform!:boolean;


  ngOnInit(): void {
    
  }


  

  navbarList: any = [


        {
          title: 'Student',
          url:'/auth/login/student'
        },
        {
        title: 'Recruiter',
         url:'/auth/login/company'
        },
        {
          title: 'Commitee',
           url:'/auth/login/commitee'
        },
        {
          title: 'Coordinators',
           url:'/auth/login/admin'
        }
  
  ]
}
