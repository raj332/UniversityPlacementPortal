import { Component,  OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { StudentApisService } from 'src/app/services/student-apis.service';
import { ViewJobOfferComponent } from '../view-openings/view-job-offer/view-job-offer.component';
import { CompanyApisService } from 'src/app/services/company-apis.service';
@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent implements OnInit {
  spid!:any; 
  dataSource = new MatTableDataSource<any>();
  
    constructor(private dialog: MatDialog, private services:StudentApisService,private compServices :CompanyApisService) {
      this.spid =localStorage.getItem("spid");
     }
     
    ngOnInit(): void {
      this.fetchCompanyOffers()
    }
  
    fetchCompanyOffers(){
      this.services.getAppliedCompanies(this.spid).subscribe((data:any)=>{
        this.dataSource.data = data;
      })
    }
    displayedColumns: string[] = ['companyName', 'technology','position','status','isOutSideProcess','action','action1','action2'];
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
    acceptOffer(row:any){
      let item ={
        applicationId:row.applicationId,
        offerId :row.offerId,
        spid:this.spid,
        companyId :row.companyId ,
        isOutSideProcess :true,
        isSelected : true,
        finalCTC:row.finalCTC,
        trainingMonths :row.trainingMonths,
        stipend:row.stipend,
        hasClearedRounds : true,
        isPlaced : true,
        status : "Placed !"
      }
      this.compServices.updateStudentStatus(item).subscribe((data)=>{
        this.ngOnInit();
        localStorage.setItem("isInPlacementDrive",'false')
        alert("Placed !")
      })
    }
    rejectOffer(row:any){
      let item ={
        applicationId:row.applicationId,
        offerId :row.offerId,
        spid:this.spid,
        companyId :row.companyId ,
        isOutSideProcess :true,
        isSelected : true,
        finalCTC:0,
        trainingMonths :0,
        stipend:0,
        hasClearedRounds : true,
        isPlaced : false,
        status : "rejected"
      }
      this.compServices.updateStudentStatus(item).subscribe((data)=>{
        this.ngOnInit();
        localStorage.setItem("isInPlacementDrive",'false')
        alert("Rejected !")
      })
    }
    openDialog(row:any){
      const dialogRef=this.dialog.open(ViewJobOfferComponent, {
        // add any additional options here
       
        data:row
      });
      dialogRef.afterClosed().subscribe((result:any )=> {
  this.fetchCompanyOffers();
        
      });
     
    }
}
