import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
  export interface PeriodicElement {
  name: string;
  position: string;
  CTC: string;
}
@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {
 panelOpenState = false;
  constructor() { }
  MenuList: any = [

    {

      heading:'Job Section',
      links: [
        {
          title: 'Create Offer',
          url:'/dashboard/company/createoffer'
        },
      ],
      },
    {
      heading:'Application Management',
      links: [
        {
          title: 'View Applications',
          url:'/dashboard/company/ViewAppliaction'
        },
        {
        title: 'Shortlisted Application',
         url:'/dashboard/company/Shortlisted'
        },
        {
          title: 'Sheduled Interviews',
           url:'/dashboard/company/Interviews'
        },
        {
          title: 'Selected Candidates',
           url:'/dashboard/company/Selected'
        },

      ],
    },
    {
      heading:'Statistics',
      links: [
        {
          title: '2022-Statistics',
          url:'/dashboard/company/Statistics'
        }
      ],
    },
    {
      heading:'Profile',
      links: [
        {
          title: 'View Profile',
          url:'/dashboard/company/MyProfile'
        },

      ],
      },

  ]


  isMenuOpne: boolean = false;
  TotalCompanys:number=0;
  Eligible:number=0;
  Applied:number=0;
  status: string = 'In Process';



  ngOnInit(): void {
  }
  toggle(drawer:any) {
    this.isMenuOpne === false ? this.isMenuOpne = true : this.isMenuOpne = false;
    drawer.toggle();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


}
