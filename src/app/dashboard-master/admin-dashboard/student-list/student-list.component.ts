import { Component, OnInit } from '@angular/core';
import { AdminApisService } from 'src/app/services/admin-apis.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
 
  constructor(private services: AdminApisService,private dialog: MatDialog,) {
   
  }
  ngOnInit(): void {
    this.services.getAllStudents().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }
  spid!: any;
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['spid', 'name', 'contactNo', 'course', 'action'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  defaultcontent = true;
  changeDefaultContent() {
    this.defaultcontent == true
      ? (this.defaultcontent = false)
      : (this.defaultcontent = true);
  }
  openDialog(row: any) {
    const dialogRef = this.dialog.open(StudentDetailComponent, {
      // add any additional options here
      data: row,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.ngOnInit()
    });
  }
}
