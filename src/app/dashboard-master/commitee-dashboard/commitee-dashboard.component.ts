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
          title: 'Start Voting',
          url:'/dashboard/commitee/CompanyVoting'
        },
        {
        title: 'On going Votings',
         url:'/dashboard/commitee/VotingResults'
        },
        {
          title: 'Sheduled Talks',
           url:'/dashboard/commitee/SheduledPPTList'
          },
      ],
      },
    {
      heading:'Company',
      links: [
        {
          title: 'Add Company',
          url:'/dashboard/commitee/AddCompany'
        },
        {
        title: 'View Companys',
         url:'/dashboard/commitee/ViewCompany'
        }
      ],
    },
    
    {
      heading:'My Profile',
      links: [
        {
          title: 'View Profile',
          url:'/dashboard/commitee/MyProfile'
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
    console.log(this.MenuList[0]);
  }
  toggle(drawer:any) {
    this.isMenuOpne === false ? this.isMenuOpne = true : this.isMenuOpne = false;
    drawer.toggle();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

}
