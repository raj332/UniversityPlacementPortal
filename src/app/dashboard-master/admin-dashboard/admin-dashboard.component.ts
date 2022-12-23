import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentUser = localStorage.getItem("studentName")
    
  profilePic:string="../../assets/"+localStorage.getItem("profilePic") ;
  
   constructor( private router:Router) {
 
     if(!localStorage.getItem("admintoken")){
      localStorage.clear()
       this.router.navigate(['/auth/login/admin'])
     }
    
 
   }
   showFiller = false;
   panelOpenState = true;
   //side navigation menu options
   MenuList: any = [
    
         {
           title: 'Student Control',
           url: '/dashboard/admin/',
         },
       
    
         {
           title: 'Commitiee Registration',
           url: '/dashboard/admin/AddCommitee',
         },
         {
           title: 'Placement States',
           url: '/dashboard/admin/PlacementStates',
         },
       ]
    
 
   isMenuOpne: boolean = true;
   TotalCompanys: number = 0;
   Eligible: number = 0;
   Applied: number = 0;
   status: string = 'In Process';
 
   pending: number = 0;
   Shortlisted: number = 0;
   Selected: number = 0;
 
 
   ngOnInit(): void {
 
   }
    //  var s = document.createElement('script');
    //  s.type = 'text/javascript';
    //  s.src = '../assets/js/main.js';
    //  this.elementRef.nativeElement.appendChild(s);
   
  //  toggle(drawer: any) {
  //    this.isMenuOpne === false
  //      ? (this.isMenuOpne = true)
  //      : (this.isMenuOpne = false);
  //    drawer.toggle();
  // }
 
}
