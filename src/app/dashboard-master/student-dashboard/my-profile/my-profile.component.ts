import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonApisService } from 'src/app/services/common-apis.service';
import { StudentApisService } from 'src/app/services/student-apis.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  spid = localStorage.getItem("spid")
  constructor(public dialog: MatDialog , private services : StudentApisService ,private commonServices : CommonApisService) { }
  name: string = "Bhatt Jaimin";
  course: string = "M.Sc.(I.T)";
  btnName = "Edit";
  stuData!:any;
courseList :any ;
  IsEditable= false;
  ngOnInit(): void {
    this.fetchMydetail()
    this.fetchCourses()
  }
fetchMydetail(){
this.services.getMyDetail(this.spid).subscribe((data:any)=>{
  this.stuData =data ;

})
}
fetchCourses(){
  this.commonServices.getCourses().subscribe((data:any)=>{
    this.courseList = data ;
  })
}
  OnEditRequest() {
    this.IsEditable == false ? this.IsEditable = true : this.IsEditable = false;
    this.IsEditable == true ? this.btnName = "cancel" : this.btnName = "Edit";
  }
  handleEdit(){

   let newStu = {
      spid: this.stuData.spid,
  studentName: this.stuData.studentName,
  courseId: this.stuData.courseId,
  contactNo: this.stuData.contactNo,
  email:this.stuData.email,
  password: this.stuData.password,
  photo: this.stuData.photo
    }
    console.log(newStu)
    this.services.editStudentDetail(this.stuData).subscribe((data:any)=>{
      if(data.success){
        alert("Edited Successfully")
       this.OnEditRequest()
      
      }else{
        alert(data.error)
        
      }
    })
  }
  openDialog() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      restoreFocus: false,
      data:this.stuData,
      width: '30rem',
    });
    dialogRef.afterClosed().subscribe(result => {

    })
  }

 
}
