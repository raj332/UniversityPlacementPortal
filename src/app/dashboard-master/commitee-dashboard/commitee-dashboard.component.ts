import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commitee-dashboard',
  templateUrl: './commitee-dashboard.component.html',
  styleUrls: ['./commitee-dashboard.component.scss']
})
export class CommiteeDashboardComponent implements OnInit {
  panelOpenState = false;
  commiteeId:any = localStorage.getItem("memberId")
  constructor(private router:Router) {
    if (!localStorage.getItem('commiteeSpid') || !localStorage.getItem("cmttoken")) {
      localStorage.clear();
      this.router.navigate(['/auth/login/commitee']);
    } ;
    }
   
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
