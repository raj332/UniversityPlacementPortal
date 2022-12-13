import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewJobOfferComponent } from '../../student-dashboard/view-openings/view-job-offer/view-job-offer.component';
@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.scss']
})
export class ViewApplicationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name','sgpa','email','contactNo', 'technology','position','action'];
  dataSource = new MatTableDataSource();
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
  openDialog(row:any){
    const dialogRef=this.dialog.open(ViewJobOfferComponent, {
      // add any additional options here
      height: '50rem',
      width: '90rem',
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any )=> {
      //console.log("data from dialog is");
      //console.log(result.name);
      
    });
  }

}
