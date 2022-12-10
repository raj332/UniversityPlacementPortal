import { NgModule } from '@angular/core';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

import { CommonModule } from '@angular/common';
import { dashboardRoutingModule } from './dashboard-master-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { JobProfileComponent } from './student-dashboard/job-profile/job-profile.component';
import { UploaderModule } from "angular-uploader";
import { MaterialDesignModuleModule } from '../material-design-module/material-design-module.module';
import { AddExperienceComponent } from './student-dashboard/job-profile/add-experience/add-experience.component';
import { OfferFormComponent } from './company-dashboard/offer-form/offer-form.component';
import { CommiteeDashboardComponent } from './commitee-dashboard/commitee-dashboard.component';
@NgModule({
  declarations: [
    StudentDashboardComponent,
    CompanyDashboardComponent,
    JobProfileComponent,
    AddExperienceComponent,
    OfferFormComponent,
    CommiteeDashboardComponent,
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
