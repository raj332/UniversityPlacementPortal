import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Uploader, UploaderOptions, UploaderResult } from "uploader";
import { AddExperienceComponent } from './add-experience/add-experience.component';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.scss']
})
export class JobProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
//dialog
  openDialog() {
     this.dialog.open(AddExperienceComponent, {restoreFocus: false});

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.

  }

  uploader = new Uploader({
    apiKey: "free" // <-- Get production-ready API keys from Upload.io
  })

  uploadOptions: UploaderOptions = ({
    multi: true,
    showFinishButton: true,
     mimeTypes: ["image/jpeg", "image/pdf", "image/png"],
      maxFileCount: 10,
  });
  uploadComplete = (files: UploaderResult[]) => {
    console.log(files.map(x => x.fileUrl));
  };
  file: any;
  MenuList: any = [
    "SEM 1 CGPA",
    "SEM 2 CGPA",
    "SEM 3 CGPA",
    "SEM 4 CGPA",
    "SEM 5 CGPA",
    "SEM 6 CGPA",
    "SEM 7 CGPA",
    "SEM 8 CGPA",
    "SEM 9 CGPA",
    "SEM 10 CGPA",


  ]


  onFileAdd(file: any) {
    this.file = file;
  }

  onFileRemove() {
    this.file = null;
  }
  width = "600px";
  height = "375px";
}
