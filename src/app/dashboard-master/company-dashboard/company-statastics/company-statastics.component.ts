import { X } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from 'angular-google-charts';
import { CommonApisService } from 'src/app/services/common-apis.service';
@Component({
  selector: 'app-company-statastics',
  templateUrl: './company-statastics.component.html',
  styleUrls: ['./company-statastics.component.scss']
})
export class CompanyStatasticsComponent implements OnInit {
  title = 'Browser market shares at a specific website, 2014';
  type:any='Bar';
  data:any [][]=[]; 
 options = {
  colors: ['#325288'],
  is3D: true
};
width = 450;
height = 300;
 columnNames = ['year', 'Hired Students'];

 title2 = 'Browser market shares at a specific website, 2014';
 type2:any = 'PieChart'
 data2:any [][]=[]; 
options2 = {
  colors: ['#f3b600','#325288'],
  is3D: true
};
width2 = 450;
height2 = 300;
columnNames2 = ['Totalapplications', 'companyApplications'];


  constructor( private services :CommonApisService) {
    
this.services.getStudentYearlyPlacementChartData(localStorage.getItem("companyId")).subscribe((apidata:any)=>{
  apidata.forEach((element:any) => {
   let x = [element.year ,element.count];
    this.data.push(x)
  });
})
this.services.getCurrentYearApplicationRatio(localStorage.getItem("companyId")).subscribe((apidata:any)=>{
  let temp = (apidata.myTotal/apidata.total)*100;
   let x = ["company's Application", temp];
    this.data2.push(x)
let y =["Other Applications",100-temp ]
this.data2.push(y)
})
console.log(this.data2)
   }

  ngAfterViewInit() {
  
  }
  ngOnInit(): void {
 

}

}