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
  votingEndDate !: Date ;
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
  endDate!:Date;
  tempList: any = [];
  show = false;
  currentDate:any = new Date();
  constructor(
    private services: CompanyApisService,
    private commonService: CommonApisService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  Status = 'Voting';

  ngOnInit() {
    console.log(this.currentDate)
    this.services.getCompanylist().subscribe((data: any) => {
      this.tempList = data;
      //       this.dataSource.data = data;
      // this.show = true;
      this.commonService.getPptlist().subscribe((data: any) => {
        let tempArrray: any[] = [];
  
        this.pptList = data;
        if (this.pptList.length == 0) {
          this.dataSource.data = this.tempList;
          this.show=true
        } else {
          console.log("inloop")
          this.tempList.forEach(async(element: any) => {
            let obj = this.pptList.find(
              (o: any) => o.companyId == element.companyId
            );
            if (!obj) {
              tempArrray.push(element);
              this.changeDetectorRef.detectChanges();
            }
  
          });
          setTimeout(() => {
            this.dataSource.data =  tempArrray;
            this.show = true;
          }, 1000);
        }
      });

    });

   
  }

 

  onVoting(data: any) {
    if(this.endDate != null){
      this.Status = 'Shedule';
      this.CompanyData.votingEndDate = this.endDate;
      this.CompanyData.companyId = data.companyId;
      this.CompanyData.companyName = data.companyName;
      this.CompanyData.minCtc = data.minCTC;
      this.CompanyData.maxCtc = data.maxCTC;
      this.CompanyData.intrestedStudents = 0;
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
    }else{
      alert("select voting end date !");
    }
   
  }
  onShedule() {
    this.CompanyData.isInSheduleList = true;
  }
  displayedColumns = [
    'Companyid',
    'CompanyName',
    'Min Ctc',
    'Max Ctc',
    'ENd Date',
    'action',
  ];
}
