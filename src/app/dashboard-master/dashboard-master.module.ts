import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { dashboardRoutingModule } from './dashboard-master-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { JobProfileComponent } from './student-dashboard/job-profile/job-profile.component';
@NgModule({
  declarations: [
    StudentDashboardComponent,
    CompanyDashboardComponent,
    JobProfileComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    dashboardRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
  ]

})
export class dashboardMaster { }
