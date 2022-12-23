import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CommiteeLoginComponent } from './commitee-login/commitee-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { RegistrationMasterComponent } from './registration-master.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
const routes: Routes = [
  {path:'',component:RegistrationMasterComponent,
  children: [
    { path: 'registration/student', component: StudentRegistrationComponent },
    { path: 'login/student', component: StudentLoginComponent },
    { path : 'login/commitee' ,component:CommiteeLoginComponent},
    { path: 'registration/company',component:CompanyRegistrationComponent},
    {path:'login/company',component:CompanyLoginComponent},
    {path:'login/admin',component:AdminLoginComponent}

  ],},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class registrationRoutingModule { }
