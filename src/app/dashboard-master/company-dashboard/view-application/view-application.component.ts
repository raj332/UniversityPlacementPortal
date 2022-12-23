import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';
import { ViewJobProfileComponent } from './view-job-profile/view-job-profile.component';
@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.scss']
})
export class ViewApplicationComponent implements OnInit {
companyid !:any;
  constructor(private dialog: MatDialog ,private service : CompanyApisService) { 
    this.companyid =localStorage.getItem("companyId");
  }

  ngOnInit(): void {
    this.fetchApplications()
  }

  fetchApplications(){
    this.service.getApplications(this.companyid).subscribe((data:any)=>{
      this.dataSource = data ;
    })
  }
  displayedColumns: string[] = ['name','course','email','contactNo', 'technology','position','action'];
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
    const dialogRef=this.dialog.open(ViewJobProfileComponent, {
      // add any additional options here
     
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any )=> {
      //console.log("data from dialog is");
      //console.log(result.name);
      this.ngOnInit();
    });
  }

}
