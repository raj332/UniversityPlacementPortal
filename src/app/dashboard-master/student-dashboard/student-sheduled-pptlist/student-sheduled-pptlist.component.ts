import { Component, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-student-sheduled-pptlist',
  templateUrl: './student-sheduled-pptlist.component.html',
  styleUrls: ['./student-sheduled-pptlist.component.scss']
})
export class StudentSheduledPptlistComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  
  constructor(
    private services: CommonApisService,
  ) {}
  displayedColumns = [
    'Companyid',
    'CompanyName',
    'Min Ctc',
    'Max Ctc',
    'Date',
    'Venue',
  ];
  ngOnInit(): void {
    this.fetchSheduledList()
  }
  fetchSheduledList(){
    this.services.getSheduledlist().subscribe((data:any)=>{
    this.dataSource=data;
    })
      }
}
