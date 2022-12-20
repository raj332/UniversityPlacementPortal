import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  name: string = "Bhatt Jaimin";
  course: string = "M.Sc.(I.T)";
  btnName = "Edit";
  IsEditable= false;
  ngOnInit(): void {
  }

  OnEditRequest() {
    this.IsEditable == false ? this.IsEditable = true : this.IsEditable = false;
    this.IsEditable == true ? this.btnName = "Submit" : this.btnName = "Edit";
  }
  openDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      restoreFocus: false,
      width: '40rem',
    });
    dialogRef.afterClosed().subscribe(result => {

    })
  }
}
