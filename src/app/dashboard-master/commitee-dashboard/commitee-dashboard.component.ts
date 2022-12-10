import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commitee-dashboard',
  templateUrl: './commitee-dashboard.component.html',
  styleUrls: ['./commitee-dashboard.component.scss']
})
export class CommiteeDashboardComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  MenuList: any = [

    {

      heading:'Pre Placemnet Talk',
      links: [
        {
          title: 'Company Voting',
          url:'/dashboard/commitee/CompanyVoting'
        },
        {
        title: 'Voting Results',
         url:'/dashboard/commitee/VotingResults'
        }
      ],
      },
    {
      heading:'Company',
      links: [
        {
          title: 'Add Company',
          url:'/dashboard/student/AddJobProfile'
        },
        {
        title: 'View Companys',
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

}
