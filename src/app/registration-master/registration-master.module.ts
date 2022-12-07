import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { registrationRoutingModule } from './registration-master-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CommiteeLoginComponent } from './commitee-login/commitee-login.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentLoginComponent,
    CommiteeLoginComponent
  ],
  imports: [
    registrationRoutingModule,
    MatFormFieldModule,
     FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    StudentRegistrationComponent
  ]

})
export class registrationMaster { }
