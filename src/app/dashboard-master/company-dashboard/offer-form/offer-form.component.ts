import { Component, OnInit } from '@angular/core';
import {FormControl, NgModel} from '@angular/forms'
import { Router } from '@angular/router';
import { CompanyApisService } from 'src/app/services/company-apis.service';
import { CriteriaApisService } from 'src/app/services/criteria-apis.service';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {

  companyID !:Number;
  position!:String;
  technology!:String;
  jobDescription!:String;
  openings!:Number;
  minCTC!:Number;
  maxCTC!:Number;
  isDisclose!:Number;
  criterias!:String[];
  criteriaList:any = []
  constructor(private cservices:CriteriaApisService ,private offerservice: CompanyApisService,private router:Router) {
    cservices.getCriteriaList().subscribe((data)=>{
      this.criteriaList=data;
    })
   }

  ngOnInit(): void {
  }
handleSelChange(data:any){

  this.criterias=[]
  data.forEach((element:any )=> {
  this.criterias.push(element)
  });
}
handleSubmit(){
 this.offerservice.createOffer({
  companyID : localStorage.getItem('companyId') ,
  position : this.position ,
  technology : this.technology,
  jobDescription : this.jobDescription ,
  noOfPositions : this.openings,
  minCTC :this.minCTC ,
  maxCTC:this.maxCTC ,
  isDisclose : (this.minCTC==0 && this.maxCTC==0)?false:true,
  criterias: this.criterias
 }).subscribe((data)=>{
  alert(" offer created")
this.router.navigate(["dashboard/company/"]);
 })
}
}

