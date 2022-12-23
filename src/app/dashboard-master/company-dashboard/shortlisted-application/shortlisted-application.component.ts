import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewJobProfileComponent } from '../view-application/view-job-profile/view-job-profile.component';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { SelectionFormComponent } from './selection-form/selection-form.component';
@Component({
  selector: 'app-shortlisted-application',
  templateUrl: './shortlisted-application.component.html',
  styleUrls: ['./shortlisted-application.component.scss']
})
export class ShortlistedApplicationComponent implements OnInit {

  finalCTC !:any;
  stipend !:any;
  trainingMonths !:any;

  companyId = localStorage.getItem("companyId")
  constructor(private services:CompanyApisService,private dialog: MatDialog ) {
  }
  ngOnInit(): void {
    this.fetchApplications()
  }

  fetchApplications(){
    this.services.getShortListedApplications(this.companyId).subscribe((data:any)=>{
      this.dataSource = data ;
    })
  }
  
  displayedColumns: string[] = ['name','email','contactNo', 'technology','position','action1','action2','action3'];
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
 
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any )=> {
    
      this.ngOnInit();
    });
  }

  openDialog1(row:any){
    const dialogRef=this.dialog.open(SelectionFormComponent, {
 
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any )=> {
    
      this.ngOnInit();
    });
  }
  handleReject(row:any){
    let item ={
      applicationId:row.applicationId,
      offerId :row.offerId,
      spid:row.spid,
      companyId :localStorage.getItem("companyId") ,
      isOutSideProcess :true,
      isSelected : false,
      finalCTC:0,
      trainingMonths :0,
      stipend:0,
      hasClearedRounds : true,
      isPlaced : false,
      status : "Rejected in HR interview !"
    }
    this.services.updateStudentStatus(item).subscribe((data)=>{
      this.ngOnInit();
      alert("Rejected!")
    })
  }
    
  
}
