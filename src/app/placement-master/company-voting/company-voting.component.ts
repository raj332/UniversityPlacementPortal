import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { CompanyApisService } from 'src/app/services/company-apis.service';

class Cls_PPTCompany {
  companyId!: number;
  companyName!: string;
  date!: Date;
  venue!: string;
  minCtc!: number;
  maxCtc!: number;
  intrestedStudents!: number;
  isVisitingCampus!: boolean;
  isInVotingList!: Boolean;
  isInSheduleList!: Boolean;
}

@Component({
  selector: 'app-company-voting',
  templateUrl: './company-voting.component.html',
  styleUrls: ['./company-voting.component.scss'],
})
export class CompanyVotingComponent implements OnInit {
  Date!: string;
  Venue!: string;
  IsInVotingList!: boolean;
  IsInSheduledList!: boolean;
  CompanyData = new Cls_PPTCompany();
  dataSource = new MatTableDataSource<any>();
  pptList: any = [];
  tempList: any = [];
  show = false;
  constructor(
    private services: CompanyApisService,
    private commonService: CommonApisService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  Status = 'Voting';

  ngOnInit() {
    this.services.getCompanylist().subscribe((data: any) => {
      this.tempList = data;
      //       this.dataSource.data = data;
      // this.show = true;
    });

    this.fetchData();
  }

  fetchData() {
    this.commonService.getPptlist().subscribe((data: any) => {
      console.log(data);
      let tempArrray: any[] = [];

      this.pptList = data;
      if (this.pptList.length == 0) {
        this.dataSource.data = this.tempList;
        
        console.log('datasource ' + this.dataSource);
      } else {
        this.tempList.forEach((element: any) => {
          console.log('still in loop');
          let obj = this.pptList.find(
            (o: any) => o.companyId == element.companyId
          );
          console.log('obj from else =' + obj);
          if (!obj) {
            console.log('Element');
            console.log(element);
            tempArrray.push(element);
            this.changeDetectorRef.detectChanges();
          }
        });
        this.dataSource.data = tempArrray;
        this.show = true;
      }
    });
  }

  onVoting(data: any) {
    this.Status = 'Shedule';
    this.CompanyData.companyId = data.companyId;
    this.CompanyData.companyName = data.companyName;
    this.CompanyData.minCtc = data.minCTC;
    this.CompanyData.maxCtc = data.maxCTC;
    this.CompanyData.date = data.Date;
    this.CompanyData.venue = data.Venue;
    this.CompanyData.intrestedStudents = 1;
    this.CompanyData.isVisitingCampus = true;
    this.CompanyData.isInVotingList = true;
    this.CompanyData.isInSheduleList = false;
    console.log(this.CompanyData);
    this.commonService.insertPptlist(this.CompanyData).subscribe((data) => {
      if (data) {
        console.log(data);
        alert('voted');
      }
      this.ngOnInit();
    });
  }
  onShedule() {
    this.CompanyData.isInSheduleList = true;
  }
  displayedColumns = [
    'Companyid',
    'CompanyName',
    'Min Ctc',
    'Max Ctc',
    'Date',
    'Venue',
    'action',
  ];
}
