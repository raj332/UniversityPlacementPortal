import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-master',
  templateUrl: './dashboard-master.component.html',
  styleUrls: ['./dashboard-master.component.scss']
})
export class DashboardMasterComponent implements OnInit {

  logoutBtn:any ;
  constructor(private router : Router) { }
  showFiller = false;
  ngOnInit(): void {
  }
  ngDoCheck(){
    if(localStorage.getItem("spid")||localStorage.getItem("companyId")){
      this.logoutBtn=true;
    }
   }
    onLogout() {
      localStorage.clear();
      this.logoutBtn=false;
      this.router.navigate(['/']);
  
    }
}
