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

      heading:'job profile',
      links: [
        {
          title: 'Add Job Profile',
          url:'/dashboard/student/AddJobProfile'
        },
        {
        title: 'View job Profile',
         url:'/dashboard/ViewJobProfile'
        }
      ],
      },
    {
      heading:'Pre Placement Talks',
      links: [
        {
          title: 'fdsfsd',
          url:'/dashboard/student/AddJobProfile'
        },
        {
        title: 'fsfdsf',
         url:'/dashboard/ViewJobProfile'
        }
      ],
    },
    {
      heading:'Apply For Jobs',
      links: [
        {
          title: 'fdsfsd',
          url:'/dashboard/student/AddJobProfile'
        },
        {
        title: 'fsfdsf',
         url:'/dashboard/ViewJobProfile'
        }
      ],
    },
    {
      heading:'My Profile',
      links: [
        {
          title: 'fdsfsd',
          url:'/dashboard/student/AddJobProfile'
        },
        {
        title: 'fsfdsf',
         url:'/dashboard/ViewJobProfile'
        }
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
