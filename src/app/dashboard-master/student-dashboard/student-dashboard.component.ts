import { Component, OnInit } from '@angular/core';

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
      heading:'b',
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
  ngOnInit(): void {
    console.log(this.MenuList[0]);
  }
  toggle(drawer:any) {
    this.isMenuOpne === false ? this.isMenuOpne = true : this.isMenuOpne = false;
    drawer.toggle();
}
}
