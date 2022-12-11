import { Component, Inject, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{DialogData} from"../job-profile.component"
import { StudentApisService } from 'src/app/services/student-apis.service';
// export interface  Technology{
//   name: string;
// }
@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

constructor(public dialogRef: MatDialogRef<AddExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private services : StudentApisService) { }
 //technology:Technology[]= [{name:'HTML'},{name:"CSS"},{name:"JavaScript"},{name:"Angular"},{name:"React"},{name:"ASP.NET"},{name:".NET CORE"},{name:"JAVA"},{name:"PYTHON"},{name:"SQL"},{name:"MongoDB"},{name:"Node.JS"},{name:"Express"},{name:"Android"},{name:"IOS"}];
 technology= ["HTML","CSS","JavaScript","Angular","React","ASP.NET",".NET CORE","JAVA","PYTHON","SQL","MongoDB","Node.JS","Express","Android","IOS"];
 
 //ngModel variables
 companyName:string='';
 startDate:string='';
 endDate:string='';
 selectedTechnology:any[]=[];

 ngOnInit(): void {
  }
  ToggleChipColor=false;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  remove(_technology:any): void {
    const index = this.technology.indexOf(_technology);

    if (index >= 0) {
      this.technology.splice(index, 1);
    }
  }

  OnClick(tech:string,event:any){
    event.target.style.backgroundColor="#00004d";
    event.target.style.color="#ffffff";
    const value = (tech || '').trim();
    // Add our fruit
    if (value) {
      this.selectedTechnology.push(value);
    }
  }

  AddExperience(){
    let spid = localStorage.getItem('spid');
    var newExperience= new Experience();
    newExperience.spid =parseInt(localStorage.getItem('spid') || '');
    newExperience.CompanyName = this.companyName;
    newExperience.startDate=this.startDate;
    newExperience.endDate=this.endDate;
    newExperience.technology=this.selectedTechnology.toString();
    this.services.addInternship(newExperience).subscribe((data)=>alert("experiance added"))
    this.dialogRef.close();
    
    // write api subscription code here pass newExperience object as parameter!
  }
}
class Experience{
  spid!: Number;
  CompanyName!: String;
  startDate!:string;
  endDate!:string;
  technology!:string;
}
