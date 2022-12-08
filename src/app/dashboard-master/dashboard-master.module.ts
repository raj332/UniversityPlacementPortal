import { NgModule } from '@angular/core';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

import { CommonModule } from '@angular/common';
import { dashboardRoutingModule } from './dashboard-master-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { JobProfileComponent } from './student-dashboard/job-profile/job-profile.component';
import { MaterialDesignModuleModule } from '../material-design-module/material-design-module.module';
import { UploaderModule } from 'angular-uploader';
import { AddExperienceComponent } from './student-dashboard/job-profile/add-experience/add-experience.component';
@NgModule({
  declarations: [
    StudentDashboardComponent,
    CompanyDashboardComponent,
    JobProfileComponent,
    AddExperienceComponent,
  ],
  imports: [
    CommonModule,
    dashboardRoutingModule,
    UploaderModule,
    MaterialDesignModuleModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [],
})
export class dashboardMaster {}
