import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyApisService } from 'src/app/services/company-apis.service';
@Component({
  selector: 'app-selected-application',
  templateUrl: './selected-application.component.html',
  styleUrls: ['./selected-application.component.scss']
})
export class SelectedApplicationComponent implements OnInit {
  companyId = localStorage.getItem("companyId")

  constructor(private services:CompanyApisService) { }

  ngOnInit(): void {
    this.fetchApplications()
  }
  fetchApplications(){
    this.services.getSelectedApplications(this.companyId).subscribe((data:any)=>{
      this.dataSource = data ;
    })
  }
  displayedColumns: string[] = ['name','email','contactNo', 'technology','position','offeredCTC','stipend','status'];
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
  onInterviewCall(row:any){

  }


}
