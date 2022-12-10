import { Component, OnInit } from '@angular/core';
export interface CompanyDetails {
  Companyid: number;
  CompanyName: string;
  Date: string;
  Venue: string;
  InstrestedStudent:number;
  IsVisitingCampus:boolean;
  Max_Ctc: number;
  Min_Ctc: number;
  IsInVotingList:Boolean;
  IsInSheduledList:Boolean;
}

const ELEMENT_DATA: CompanyDetails[] = [
  {
    Companyid: 1,
    CompanyName: 'Hydrogen',
    Date: '12-11-2022',
    Venue: 'H',
    Min_Ctc: 200000,
    Max_Ctc: 300000,
    InstrestedStudent:0,
    IsVisitingCampus:true,
    IsInVotingList:false,
    IsInSheduledList:false,
  },
];
@Component({
  selector: 'app-company-voting',
  templateUrl: './company-voting.component.html',
  styleUrls: ['./company-voting.component.scss']
})
export class CompanyVotingComponent implements OnInit {
  Date!:string;
  Venue!:string;
  IsInVotingList!:boolean;
  IsInSheduledList!:boolean;
  CompanyData= new Cls_PPTCompany();
  constructor() { }
  Status='Voting';
  ngOnInit(): void {
  }
  onVoting(data:any){
    this.Status='Shedule';
    this.CompanyData.Companyid=data.Companyid;
    this.CompanyData.CompanyName=data.CompanyName;
    this.CompanyData.Min_Ctc=data.Min_Ctc;
    this.CompanyData.Max_Ctc=data.Max_Ctc;
    this.CompanyData.Date=this.Date;
    this.CompanyData.Venue=this.Venue;
    this.CompanyData.InstrestedStudent=1;
    this.CompanyData.IsVisitingCampus=true;
    this.CompanyData.IsInVotingList=true;
    this.CompanyData.IsInSheduledList=false;
    console.log(this.CompanyData);
  }
  onShedule(){
    this.CompanyData.IsInSheduledList=true;
  }
  dataSource:any=ELEMENT_DATA;
  displayedColumns=['Companyid','CompanyName','Min Ctc','Max Ctc','Date','Venue','action'];

}
class Cls_PPTCompany {
  Companyid!: number;
  CompanyName!: string;
  Date!: string;
  Venue!: string;
  Min_Ctc!: number;
  Max_Ctc!: number;
  InstrestedStudent!:number;
  IsVisitingCampus!:boolean;
  IsInVotingList!:Boolean;
  IsInSheduledList!:Boolean;
}