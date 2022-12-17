import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { CompanyApisService } from 'src/app/services/company-apis.service';
export interface CompanyDetails {
  Companyid: number;
  CompanyName: string;
  Date: string;
  Venue: string;
  Min_Ctc: number;
  Max_Ctc: number;
  IntrestedStudents:number;

}


@Component({
  selector: 'app-pre-placement-talk-list',
  templateUrl: './pre-placement-talk-list.component.html',
  styleUrls: ['./pre-placement-talk-list.component.scss'],
})
export class PrePlacementTalkListComponent implements OnInit {

  Date!: string;
  Venue!: string;
  IsInVotingList!: boolean;
  IsInSheduledList!: boolean;
  dataSource = new MatTableDataSource<any>();
  pptList: any = [];
  tempList: any = [];
  todayDate:Date = new Date();
  
  checkDate(item:any){
    if(this.todayDate > new Date(item)){
      return true;
    }else{
      return false;
    }
  }
  show = false;
  constructor(
    private services: CompanyApisService,
    private commonService: CommonApisService,
  ) {
    console.log(this.todayDate);

  }
  IsCommiteeLogin=true;
  ngOnInit(): void {

    this.commonService.getInvotinglist().subscribe((data: any) => {
      this.dataSource.data =data;
    console.log( new Date( data[1].votingEndDate))
    console.log( this.todayDate > new Date( data[2].votingEndDate) )
  })}

  displayedColumns = [
    'Companyid',
    'CompanyName',
    'Min Ctc',
    'Max Ctc',
    'IntrestedStudents',
    'VotingEndDate',
    'Date',
    'Venue',
    'action',
  ];

  onShedule(data:any){
    console.log(data)
    if(data.date!=null && data.venue!="" ){
    data.isInSheduleList = true ;
    data.isInVotingList = false ;
    this.commonService.updatePptlist(data).subscribe((data:any)=>{
      this.ngOnInit();
    })}else{
      alert("Enter date or venue")
    }

  }
  
}
