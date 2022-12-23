import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-master',
  templateUrl: './dashboard-master.component.html',
  styleUrls: ['./dashboard-master.component.scss']
})
export class DashboardMasterComponent implements OnInit {
loggedInUser! :string ;
  logoutBtn:any ;
  constructor(private router : Router) {
   this.loggedInUser = localStorage.getItem("studentName") || localStorage.getItem("companyName") || localStorage.getItem("adminName")|| localStorage.getItem("commiteeSpid")|| '';
   }
  showFiller = false;
  ngOnInit(): void {
    if(localStorage.getItem("spid")||localStorage.getItem("companyId")||localStorage.getItem("commiteeSpid")||localStorage.getItem("adminEmail")){
      this.logoutBtn=true;
    }
  }
  
    onLogout() {
      localStorage.clear();
      this.logoutBtn=false;
      this.router.navigate(['/auth/login/student']);
  
    }
}
