import { NgModule } from '@angular/core';

import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { registrationRoutingModule } from './registration-master-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CommiteeLoginComponent } from './commitee-login/commitee-login.component';
import { CommonModule } from '@angular/common';
import { MaterialDesignModuleModule } from '../material-design-module/material-design-module.module';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { RouterModule } from '@angular/router';
import { RegistrationMasterComponent } from './registration-master.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentLoginComponent,
    CommiteeLoginComponent,
    CompanyRegistrationComponent,
    CompanyLoginComponent,
    RegistrationMasterComponent,
    AdminLoginComponent
  ],
  imports: [
    registrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  RouterModule,
    MaterialDesignModuleModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [StudentRegistrationComponent,RouterModule],
})
export class registrationMaster {}
