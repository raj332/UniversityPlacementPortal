import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
registered=false;
courseList!: any[];
  confirmPassword!:String;
  errorMsg!: string;
  validMsg!: string;

  constructor(private service:StudentApisService, private cservices :CommonApisService ,private router:Router) {
       cservices.getCourses().subscribe((data:any)=>{
            this.courseList = data ;

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

  this.service.registerStudent(stu).subscribe((data:any)=>{
    if(data.error){
      alert(data.error);
      
    }
    if(data.success){
      this.registered =true;
      setTimeout(() => {
        this.router.navigate(['auth/login/student'])
      }, 2000);
    }
   
    
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

  onconfirmPassword(pass: String, confirmpass: String) {

    if (!this.confirmPassword) {
      this.errorMsg = '';
    }
    else if (pass != confirmpass) {
      this.validMsg = '';
      this.errorMsg="Doesn't Match With Yor Password!"
    }
    else {
      this.errorMsg = '';
      this.validMsg = 'Password Matched!';
    }
  }

}
