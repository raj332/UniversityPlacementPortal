import { Component, OnInit } from '@angular/core';
import { read } from '@popperjs/core';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})

export class StudentRegistrationComponent implements OnInit {
spid!:Number ;
studentName!: String;
courseId!:Number;
contactNo!:Number;
email!:String;
password!:String;
photo!:String;
courseList!:any[] ;

  constructor(private service:StudentApisService, private cservices :CommonApisService) { 
       cservices.getCourses().subscribe((data:any)=>{
            this.courseList = data ;
            console.log(this.courseList)
       })
  }

  ngOnInit(): void {
  }
  url = "";
  isPreview=false;

handleSubmit(){
let stu = {
  spid:this.spid,
studentName: this.studentName,
courseId:this.courseId,
contactNo:this.contactNo,
email:this.email,
password:this.password,
photo:this.photo
 }

  this.service.registerStudent(stu).subscribe((data)=>{
alert(data);
  })
}

  onFileChange(event: any) {
    console.log(event.target);
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url=event.target.result;
      }
      this.isPreview == false ? this.isPreview = true : this.isPreview = false;
    }
  }

}
