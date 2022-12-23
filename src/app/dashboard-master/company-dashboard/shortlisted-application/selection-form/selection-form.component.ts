import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyApisService } from 'src/app/services/company-apis.service';

@Component({
  selector: 'app-selection-form',
  templateUrl: './selection-form.component.html',
  styleUrls: ['./selection-form.component.scss']
})
export class SelectionFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public row: any ,private dialRef :MatDialogRef <SelectionFormComponent>,private services :CompanyApisService) { 
  }
  
  ngOnInit(): void {
  }
 

stipend!:any;
finalCtc !:any;
trainingMonths!:any;
handleSubmit(){
  let item ={
    applicationId:this.row.applicationId,
    offerId :this.row.offerId,
    spid:this.row.spid,
    companyId :localStorage.getItem("companyId") ,
    isOutSideProcess :false,
    isSelected : true,
    finalCTC:this.finalCtc,
    trainingMonths :this.trainingMonths,
    stipend:this.stipend,
    hasClearedRounds : true,
    isPlaced : false,
    status : "Selected for Job !"
  }
  this.services.updateStudentStatus(item).subscribe((data)=>{
    this.ngOnInit();
    alert("Selected !")
  })
}

  
}



