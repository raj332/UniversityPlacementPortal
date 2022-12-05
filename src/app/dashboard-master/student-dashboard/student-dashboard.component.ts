import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

import {MatTableDataSource} from '@angular/material/table';
  export interface PeriodicElement {
  name: string;
  position: string;
  CTC: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Web developer', name: 'herald logic', CTC: '7 LPA to 10 LPA'},
  {position: 'IOS developer', name: 'NJ Technologies', CTC: '7 LPA to 10 LPA'},
  {position: 'react developer', name: 'Riversand', CTC: '7 LPA to 10 LPA'},
  {position: 'java developer', name: 'Responscity Systems', CTC: '7 LPA to 10 LPA'},
  {position: 'Network Engineer', name: 'IBM',  CTC: '7 LPA to 10 LPA'},
];
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss',
]
})
export class StudentDashboardComponent implements OnInit {

  constructor() { }
  showFiller = false;
  panelOpenState = false;
//side navigation menu options
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
    console.log(this.MenuList[0]);
  }
  toggle(drawer:any) {
    this.isMenuOpne === false ? this.isMenuOpne = true : this.isMenuOpne = false;
    drawer.toggle();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
