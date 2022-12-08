import { NgModule } from '@angular/core';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { registrationRoutingModule } from './registration-master-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CommiteeLoginComponent } from './commitee-login/commitee-login.component';
import { CommonModule } from '@angular/common';
import { MaterialDesignModuleModule } from '../material-design-module/material-design-module.module';
@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentLoginComponent,
    CommiteeLoginComponent,
  ],
  imports: [
    registrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialDesignModuleModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [StudentRegistrationComponent],
})
export class registrationMaster {}
