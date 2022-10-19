import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'placement_management_System';
  isLogin: boolean = false;
  isRegistered: boolean = false;

  toggleBtns() {
   this.isLogin = true;
  this.isRegistered = true;
  }

}

