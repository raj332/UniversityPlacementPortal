import { Component, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { MatTableDataSource } from '@angular/material/table';

export interface CompanyDetails {
  Companyid: number;
  CompanyName: string;
  Date: string;
  Venue: string;
  Min_Ctc: number;
  Max_Ctc: number;
}



@Component({
  selector: 'app-pre-placement-voting',
  templateUrl: './pre-placement-voting.component.html',
  styleUrls: ['./pre-placement-voting.component.scss'],
})
export class PrePlacementVotingComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  spid:any ;
  constructor( private commonService: CommonApisService) {
    this.spid=localStorage.getItem("spid");
  }

  displayedColumns: string[] = [
    'Companyid',
    'CompanyName',
    'Date',
    'Venue',
    'Min Ctc',
    'Max Ctc',
    'action'
  ];
onVote(data:any){
  this.commonService.castVote(this.spid,data).subscribe((data:any)=>{
    alert("Your Vote casted")
  })
  setTimeout(() => {
    this.getVotingList()
  }, 500);
  
}

  ngOnInit(): void {
   this.getVotingList()
}

getVotingList(){
  this.commonService.getStudentNotVotedCompany(this.spid).subscribe((data: any) => {
    this.dataSource.data =data;
})
}
}