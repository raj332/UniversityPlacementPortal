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
  MenuList: any = ['aa','bb','cc','dd']
  SubMenuList: any = []

  isMenuOpne: boolean = false;
  ngOnInit(): void {
  }
  toggle(drawer:any) {
    this.isMenuOpne === false ? this.isMenuOpne = true : this.isMenuOpne = false;
    drawer.toggle();
}
}
