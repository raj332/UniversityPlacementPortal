import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewJobProfileComponent } from '../view-application/view-job-profile/view-job-profile.component';
import { CompanyApisService } from 'src/app/services/company-apis.service';
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
  
  displayedColumns: string[] = ['name','email','contactNo', 'technology','position','action1','action2','action3','action4','action5'];
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
      height: '50rem',
      width: '90rem',
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any )=> {
      //console.log("data from dialog is");
      //console.log(result.name);
      this.ngOnInit();
    });
  }
  onSelection(row:any){
    let item ={
      applicationId:row.applicationId,
      offerId :row.offerId,
      spid:row.spid,
      companyId :this.companyId ,
      isOutSideProcess :false,
      isSelected : true,
      finalCTC:this.finalCTC,
      trainingMonths :this.trainingMonths,
      stipend:this.stipend,
      hasClearedRounds : true,
      isPlaced : false,
      status : "Selected for Job !"
    }
    this.services.updateStudentStatus(item).subscribe((data)=>{
      this.ngOnInit();
      alert("Selected !")
    })
  }

}
