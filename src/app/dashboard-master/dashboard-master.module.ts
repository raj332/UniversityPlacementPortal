import { NgModule } from '@angular/core';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CommonModule } from '@angular/common';
import { dashboardRoutingModule } from './dashboard-master-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { JobProfileComponent } from './student-dashboard/job-profile/job-profile.component';
import { UploaderModule } from "angular-uploader";
import { MyProfileComponent as MyProfileComponent1 } from './company-dashboard/my-profile/my-profile.component';
import { MaterialDesignModuleModule } from '../material-design-module/material-design-module.module';
import { AddExperienceComponent } from './student-dashboard/job-profile/add-experience/add-experience.component';
import { OfferFormComponent } from './company-dashboard/offer-form/offer-form.component';
import { CommiteeDashboardComponent } from './commitee-dashboard/commitee-dashboard.component';
import { ViewOpeningsComponent } from './student-dashboard/view-openings/view-openings.component';
import { CheckStatusComponent } from './student-dashboard/check-status/check-status.component';
import { CompanyListComponent } from './commitee-dashboard/company-list/company-list.component';
import { SheduledPPTListComponent } from './commitee-dashboard/sheduled-pptlist/sheduled-pptlist.component';
import { ViewJobProfileComponent } from './company-dashboard/view-application/view-job-profile/view-job-profile.component';
import { ViewApplicationComponent } from './company-dashboard/view-application/view-application.component';
import { ShortlistedApplicationComponent } from './company-dashboard/shortlisted-application/shortlisted-application.component';
import { SelectedApplicationComponent } from './company-dashboard/selected-application/selected-application.component';
import { CompanyStatasticsComponent } from './company-dashboard/company-statastics/company-statastics.component';
import { ViewJobOfferComponent } from './student-dashboard/view-openings/view-job-offer/view-job-offer.component';
import { ChangePasswordComponent } from './student-dashboard/my-profile/change-password/change-password.component';
import { StudentSheduledPptlistComponent } from './student-dashboard/student-sheduled-pptlist/student-sheduled-pptlist.component';
import { MyProfileComponent } from './student-dashboard/my-profile/my-profile.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { AllOffersComponent } from './company-dashboard/all-offers/all-offers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentListComponent } from './admin-dashboard/student-list/student-list.component';
import { CommiteeRegistrationComponent } from './admin-dashboard/commitee-registration/commitee-registration.component';
import { PlacementStatesComponent } from './admin-dashboard/placement-states/placement-states.component';
import { StudentDetailComponent } from './admin-dashboard/student-list/student-detail/student-detail.component';
import { SelectionFormComponent } from './company-dashboard/shortlisted-application/selection-form/selection-form.component';
import { ChangePasswordComponent as ChangePasswordComponent1 } from './company-dashboard/my-profile/change-password/change-password.component';
@NgModule({
  declarations: [
    StudentDashboardComponent,
    CompanyDashboardComponent,
    JobProfileComponent,
    AllOffersComponent,
    AddExperienceComponent,
    OfferFormComponent,
    CommiteeDashboardComponent,
    ViewOpeningsComponent,
    SelectionFormComponent,
    CheckStatusComponent,
    ChangePasswordComponent1,
    CompanyListComponent,
    SheduledPPTListComponent,
    ViewJobProfileComponent,
    ViewApplicationComponent,
    ShortlistedApplicationComponent,
    SelectedApplicationComponent,
    CompanyStatasticsComponent,
    ViewJobOfferComponent,
    ChangePasswordComponent,
    StudentSheduledPptlistComponent,
    MyProfileComponent,
    MyProfileComponent1,
    ChangePasswordComponent,
    AdminDashboardComponent,
    StudentListComponent,
    CommiteeRegistrationComponent,
    PlacementStatesComponent,
    StudentDetailComponent,
    
  ],
  imports: [
    CommonModule,
    dashboardRoutingModule,
    UploaderModule,
    MaterialDesignModuleModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [],
})
export class dashboardMaster {}
