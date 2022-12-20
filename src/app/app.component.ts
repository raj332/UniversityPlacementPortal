import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placement_management_System';
  // isLogin: boolean = false;
  // isRegistered: boolean = false;
  logoutBtn=false;
  constructor(private router:Router){
    
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

