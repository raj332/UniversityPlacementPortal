import { Component, Inject, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{DialogData} from"../job-profile.component"
export interface  Technology{
  name: string;
}
@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent implements OnInit {

constructor(public dialogRef: MatDialogRef<AddExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }
 technology:Technology[]= [{name:'HTML'},{name:"CSS"},{name:"JavaScript"},{name:"Angular"},{name:"React"},{name:"ASP.NET"},{name:".NET CORE"},{name:"JAVA"},{name:"PYTHON"},{name:"SQL"},{name:"MongoDB"},{name:"Node.JS"},{name:"Express"},{name:"Android"},{name:"IOS"}];
 //ngModel variables
 companyName:string='';
 startDate:string='';
 endDate:string='';
 selectedTechnology:Technology[]=[];

 ngOnInit(): void {
  }
  ToggleChipColor=false;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.selectedTechnology.push({name: value});
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(_technology: Technology): void {
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
      this.selectedTechnology.push({name: value});
    }
  }

  AddExperience(){
    var newExperience= new Experience();
    newExperience.spid = 2019008852//sessionStorage.getItem('SPID');
    newExperience.CompanyName = this.companyName;
    newExperience.startDate=this.startDate;
    newExperience.endDate=this.endDate;
    newExperience.technology=this.selectedTechnology;

    this.dialogRef.close(newExperience);
    // write api subscription code here pass newExperience object as parameter!
  }
}
class Experience{
  spid!: Number;
  CompanyName!: String;
  startDate!:string;
  endDate!:string;
  technology!:Technology[]
}
