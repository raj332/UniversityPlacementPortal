import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ViewJobOfferComponent } from './view-job-offer/view-job-offer.component';
export interface PeriodicElement {
  name: string;
  technology:string;
  minCtc:number;
  maxCtc:number;
  position: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Wipro LTD.',technology:"Angular,React,HTML",minCtc:9054520,maxCtc:1000000, position: 'Web developer' },
  {name: 'Infosys LTD.',technology:"Angular,React,HTML",minCtc:9054520,maxCtc:1000000, position: 'Web developer' },
  {name: 'TCS LTD.',technology:"Angular,React,HTML",minCtc:9054520,maxCtc:1000000, position: 'Web developer' },
  {name: 'TECH MahendraLTD.',technology:"Angular,React,HTML",minCtc:9054520,maxCtc:1000000, position: 'Web developer' },
];
@Component({
  selector: 'app-view-openings',
  templateUrl: './view-openings.component.html',
  styleUrls: ['./view-openings.component.scss']
})
export class ViewOpeningsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name', 'technology','position','minCtc','maxCtc','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  defaultcontent = true;
  changeDefaultContent() {
    this.defaultcontent == true
      ? (this.defaultcontent = false)
      : (this.defaultcontent = true);
  }
  openDialog(row:any){
    const dialogRef=this.dialog.open(ViewJobOfferComponent, {
      // add any additional options here
      height: '50rem',
      width: '90rem',
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any )=> {
      //console.log("data from dialog is");
      //console.log(result.name);
      
    });
  }

  
}
