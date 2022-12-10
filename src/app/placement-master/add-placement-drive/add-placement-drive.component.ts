import { Component, OnInit } from '@angular/core';
import { read } from '@popperjs/core';

@Component({
  selector: 'app-add-placement-drive',
  templateUrl: './add-placement-drive.component.html',
  styleUrls: ['./add-placement-drive.component.scss']
})
export class AddPlacementDriveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
       url = '';
      isPreview = false;
      onFileChange(event: any) {
       console.log(event.target);
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      this.isPreview == false
        ? (this.isPreview = true)
        : (this.isPreview = false);
    }
  }

}

