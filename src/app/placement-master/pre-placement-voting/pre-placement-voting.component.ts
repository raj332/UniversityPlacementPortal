import { Component, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { MatTableDataSource } from '@angular/material/table';





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
  todayDate:Date = new Date();
  
  checkDate(item:any){
    if(this.todayDate < new Date(item)){
      return true;
    }else{
      return false;
    }
  }
  displayedColumns: string[] = [
    'Companyid',
    'CompanyName', 
    'Min Ctc',
    'Max Ctc',
    'VotingEndDate',
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
    if(localStorage.getItem("isInPlacementDrive")=="false"){
      alert("Your are out of placement Drive !")
    }else
    {
      this.getVotingList()

    }
   
}

getVotingList(){
  this.commonService.getStudentNotVotedCompany(this.spid).subscribe((data: any) => {
    this.dataSource.data =data;
})
}
}