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
import { ViewOpeningsComponent } from './student-dashboard/view-openings/view-openings.component';
import { CheckStatusComponent } from './student-dashboard/check-status/check-status.component';
import { MyProfileComponent } from './student-dashboard/my-profile/my-profile.component';
import { CompanyListComponent } from './commitee-dashboard/company-list/company-list.component';
import { SheduledPPTListComponent } from './commitee-dashboard/sheduled-pptlist/sheduled-pptlist.component';
import { CommiteeProfileComponent } from './commitee-dashboard/commitee-profile/commitee-profile.component';
import { ViewJobProfileComponent } from './company-dashboard/view-application/view-job-profile/view-job-profile.component';
import { ViewApplicationComponent } from './company-dashboard/view-application/view-application.component';
import { ShortlistedApplicationComponent } from './company-dashboard/shortlisted-application/shortlisted-application.component';
import { SelectedApplicationComponent } from './company-dashboard/selected-application/selected-application.component';
import { CompanyStatasticsComponent } from './company-dashboard/company-statastics/company-statastics.component';
import { ViewJobOfferComponent } from './student-dashboard/view-openings/view-job-offer/view-job-offer.component';
import { StudentSheduledPptlistComponent } from './student-dashboard/student-sheduled-pptlist/student-sheduled-pptlist.component';
@NgModule({
  declarations: [
    StudentDashboardComponent,
    CompanyDashboardComponent,
    JobProfileComponent,
    AddExperienceComponent,
    OfferFormComponent,
    CommiteeDashboardComponent,
    ViewOpeningsComponent,
    CheckStatusComponent,
    MyProfileComponent,
    CompanyListComponent,
    SheduledPPTListComponent,
    CommiteeProfileComponent,
    ViewJobProfileComponent,
    ViewApplicationComponent,
    ShortlistedApplicationComponent,
    SelectedApplicationComponent,
    CompanyStatasticsComponent,
    ViewJobOfferComponent,
    StudentSheduledPptlistComponent,
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
