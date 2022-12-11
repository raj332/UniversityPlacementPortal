import { Component, OnInit } from '@angular/core';
export interface CompanyDetails {
  Companyid: number;
  CompanyName: string;
  Date: string;
  Venue: string;
  Min_Ctc: number;
  Max_Ctc: number;
  IntrestedStudents:number;

}

const ELEMENT_DATA: CompanyDetails[] = [
  {
    Companyid: 1,
    CompanyName: 'Hydrogen',
    Date: '12-11-2022',
    Venue: 'H',
    Min_Ctc: 200000,
    Max_Ctc: 300000,
    IntrestedStudents:35
  },
];
@Component({
  selector: 'app-pre-placement-talk-list',
  templateUrl: './pre-placement-talk-list.component.html',
  styleUrls: ['./pre-placement-talk-list.component.scss'],
})
export class PrePlacementTalkListComponent implements OnInit {
  constructor() {}
  IsCommiteeLogin=true;

  displayedColumns = [
    'Companyid',
    'CompanyName',
    'Min Ctc',
    'Max Ctc',
    'Date',
    'IntrestedStudents',
    'Venue',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  onShedule(){

  }
  ngOnInit(): void {}
}
