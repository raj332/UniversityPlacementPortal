import { Component, OnInit } from '@angular/core';
export interface CompanyDetails {
  Companyid: number;
  CompanyName: string;
  Date: string;
  Venue: string;
  Min_Ctc: number;
  Max_Ctc: number;
}

const ELEMENT_DATA: CompanyDetails[] = [
  {
    Companyid: 1,
    CompanyName: 'Hydrogen',
    Date: '12-11-2022',
    Venue: 'H',
    Min_Ctc: 200000,
    Max_Ctc: 300000,
  },
];

@Component({
  selector: 'app-pre-placement-voting',
  templateUrl: './pre-placement-voting.component.html',
  styleUrls: ['./pre-placement-voting.component.scss'],
})
export class PrePlacementVotingComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    'Companyid',
    'CompanyName',
    'Date',
    'Venue',
    'Min Ctc',
    'Max Ctc',
    'action'
  ];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {}
}
