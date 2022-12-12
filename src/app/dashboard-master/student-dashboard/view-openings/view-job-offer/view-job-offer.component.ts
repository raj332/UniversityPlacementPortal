import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-view-job-offer',
  templateUrl: './view-job-offer.component.html',
  styleUrls: ['./view-job-offer.component.scss']
})
export class ViewJobOfferComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewJobOfferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(this.data);
    }
    ngOnInit(): void {
    }
    onClose(){
      
      this.dialogRef.close(this.data);
    }

  

}
