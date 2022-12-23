import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CompanyApisService } from 'src/app/services/company-apis.service';
export interface PeriodicElement {
  name: string;
  position: string;
  CTC: string;
}
@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss'],
})
export class CompanyDashboardComponent implements OnInit {
  panelOpenState = false;
  currentCompanyName: any = localStorage.getItem('companyName');

  constructor(private services: CompanyApisService, private router: Router) {
    
    
      if (!localStorage.getItem('companyId')) {
        localStorage.clear()
        this.router.navigate(['/auth/login/company']);
      
      } else {
        this.services
          .companyAuth(localStorage.getItem('companyId'))
          .subscribe((data: any) => {
            if (data.error) {
              if (data.error == 'noToken' || data.error == 'tokenExpired') {
                alert('session is expired !');
                localStorage.clear();
                this.router.navigate(['/auth/login/company']);
              }
            }
          });
      }
   
    
  }
  MenuList: any = [
    {
      heading: 'Job Section',
      links: [
        {
          title: 'Create Offer',
          url: '/dashboard/company/CreateOffer',
        },
        {
          title: 'All Offer',
          url: '/dashboard/company/offers',
        },
      ],
    },
    {
      heading: 'Application Management',
      links: [
        {
          title: 'View Applications',
          url: '/dashboard/company/ViewAppliaction',
        },
        {
          title: 'Shortlisted Application',
          url: '/dashboard/company/Shortlisted',
        },
        {
          title: 'Selected Candidates',
          url: '/dashboard/company/Selected',
        },
      ],
    },
    {
      heading: 'Statistics',
      links: [
        {
          title: '2022-Statistics',
          url: '/dashboard/company/Statistics',
        },
      ],
    },
    {
      heading: 'Profile',
      links: [
        {
          title: 'View Profile',
          url: '/dashboard/company/MyProfile',
        },
      ],
    },
  ];

  isMenuOpne: boolean = false;
  TotalCompanys: number = 0;
  Eligible: number = 0;
  Applied: number = 0;
  status: string = 'In Process';

  ngOnInit(): void {}
  toggle(drawer: any) {
    this.isMenuOpne === false
      ? (this.isMenuOpne = true)
      : (this.isMenuOpne = false);
    drawer.toggle();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
