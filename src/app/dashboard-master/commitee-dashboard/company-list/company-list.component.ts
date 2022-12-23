import { Component, OnInit } from '@angular/core';
import { CommonApisService } from 'src/app/services/common-apis.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companyData:any ;
  constructor(private services:CommonApisService) { 
    services.getCompanyList().subscribe((data:any)=>{
this.companyData=data
    })
  }

  ngOnInit(): void {
  }

}
