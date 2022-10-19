import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
const routes: Routes = [
  // {path:'',component:regis??},
  { path: 'student', component: StudentRegistrationComponent },
  { path: 'login', component: StudentLoginComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class registrationRoutingModule { }
