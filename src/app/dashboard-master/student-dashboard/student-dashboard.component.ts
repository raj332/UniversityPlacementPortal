import { Component, OnInit, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: string;
  CTC: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Web developer', name: 'herald logic', CTC: '7 LPA to 10 LPA' },
  {
    position: 'IOS developer',
    name: 'NJ Technologies',
    CTC: '7 LPA to 10 LPA',
  },
  { position: 'react developer', name: 'Riversand', CTC: '7 LPA to 10 LPA' },
  {
    position: 'java developer',
    name: 'Responscity Systems',
    CTC: '7 LPA to 10 LPA',
  },
  { position: 'Network Engineer', name: 'IBM', CTC: '7 LPA to 10 LPA' },
];
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  showFiller = false;
  panelOpenState = true;
  //side navigation menu options
  MenuList: any = [
    {
      heading: 'job profile',
      links: [
        {
          title: 'Add Job Profile',
          url: '/dashboard/student/AddJobProfile',
        },
        {
          title: 'View job Profile',
          url: '/dashboard/ViewJobProfile',
        },
      ],
    },
    {
      heading: 'Pre Placement talk',
      links: [
        {
          title: 'Vote Now',
          url: '/dashboard/student/prePlacementVoting',
        },
        {
          title: 'View sheduled',
          url: '/dashboard/student/prePlacementTalkList',
        },
      ],
    },
    {
      heading: 'Jobs Section',
      links: [
        {
          title: 'View Openings',
          url: '/dashboard/student/ViewOpenings',
        },
        {
          title: 'check Status',
          url: '/dashboard/student/CheckStatus',
        },
      ],
    },
    {
      heading: 'My Profile',
      links: [
        {
          title: 'View Profile',
          url: '/dashboard/student/ViewProfile',
        },
        
      ],
    },
  ];

  isMenuOpne: boolean = true;
  TotalCompanys: number = 0;
  Eligible: number = 0;
  Applied: number = 0;
  status: string = 'In Process';

  pending: number = 0;
  Shortlisted: number = 0;
  Selected: number = 0;
  defaultcontent = true;
  changeDefaultContent() {
    this.defaultcontent == true
      ? (this.defaultcontent = false)
      : (this.defaultcontent = true);
  }

  ngOnInit(): void {
    console.log(this.MenuList[0]);

    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../assets/js/main.js';
    this.elementRef.nativeElement.appendChild(s);
  }
  toggle(drawer: any) {
    this.isMenuOpne === false
      ? (this.isMenuOpne = true)
      : (this.isMenuOpne = false);
    drawer.toggle();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
