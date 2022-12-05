import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

  constructor() { }
  technology= ["HTML","CSS","Java Script","Angular","React","ASP.NET",".NET CORE","C#","JAVA","C","C++","PYTHON","SQL Server","MongoDB","Node.JS","Express","Android","IOS"];
  ngOnInit(): void {
  }

}
