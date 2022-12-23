import { Component, OnInit } from '@angular/core';
import { CompanyApisService } from 'src/app/services/company-apis.service';

@Component({
  selector: 'app-all-offers',
  templateUrl: './all-offers.component.html',
  styleUrls: ['./all-offers.component.scss']
})
export class AllOffersComponent implements OnInit {
  offerData:any ;
  constructor(private services:CompanyApisService) { 
    services.getAllOffers(localStorage.getItem("companyId")).subscribe((data:any)=>{
this.offerData=data
    })
  }

  ngOnInit(): void {
  }
 

}
