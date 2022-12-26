import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyProfileComponent as  MyProfileComponent1 } from './company-dashboard/my-profile/my-profile.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { OfferFormComponent } from './company-dashboard/offer-form/offer-form.component';
import { JobProfileComponent } from './student-dashboard/job-profile/job-profile.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { PrePlacementVotingComponent } from '../placement-master/pre-placement-voting/pre-placement-voting.component';
import { PrePlacementTalkListComponent } from '../placement-master/pre-placement-talk-list/pre-placement-talk-list.component';
import { CommiteeDashboardComponent } from './commitee-dashboard/commitee-dashboard.component';
import { CompanyVotingComponent } from '../placement-master/company-voting/company-voting.component';
import { CompanyRegistrationComponent } from '../registration-master/company-registration/company-registration.component';
import { ViewOpeningsComponent } from './student-dashboard/view-openings/view-openings.component';
import { CheckStatusComponent } from './student-dashboard/check-status/check-status.component';
import { MyProfileComponent } from './student-dashboard/my-profile/my-profile.component';
import { SheduledPPTListComponent } from './commitee-dashboard/sheduled-pptlist/sheduled-pptlist.component';
import { CompanyListComponent } from './commitee-dashboard/company-list/company-list.component';
import { ViewApplicationComponent } from './company-dashboard/view-application/view-application.component';
import { ViewJobProfileComponent } from './company-dashboard/view-application/view-job-profile/view-job-profile.component';
import { ShortlistedApplicationComponent } from './company-dashboard/shortlisted-application/shortlisted-application.component';
import { SelectedApplicationComponent } from './company-dashboard/selected-application/selected-application.component';
import { CompanyStatasticsComponent } from './company-dashboard/company-statastics/company-statastics.component';
import { StudentSheduledPptlistComponent } from './student-dashboard/student-sheduled-pptlist/student-sheduled-pptlist.component';
import { DashboardMasterComponent } from './dashboard-master.component';
import { AllOffersComponent } from './company-dashboard/all-offers/all-offers.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CommiteeRegistrationComponent } from './admin-dashboard/commitee-registration/commitee-registration.component';
import { StudentListComponent } from './admin-dashboard/student-list/student-list.component';
import { PlacementStatesComponent } from './admin-dashboard/placement-states/placement-states.component';

const routes: Routes = [
  { path: '', component: DashboardMasterComponent,
children: [{
  path: 'student',
  component: StudentDashboardComponent,
  children: [
    {path:'',component:MyProfileComponent},
    { path: 'AddJobProfile', component: JobProfileComponent },
    { path: 'prePlacementVoting', component: PrePlacementVotingComponent },
    { path: 'ViewOpenings' ,component:ViewOpeningsComponent},
    {path: 'CheckStatus' ,component:CheckStatusComponent},
    {path:'ViewProfile',component:MyProfileComponent},
   {path:'talklist',component:StudentSheduledPptlistComponent}
  ],
},
{
  path: 'commitee',
  component: CommiteeDashboardComponent,
  children: [
    {path:'',component:CompanyListComponent},
    { path: 'CompanyVoting', component: CompanyVotingComponent },
    {path:'VotingResults',component:PrePlacementTalkListComponent},
    { path: 'AddCompany', component: CompanyRegistrationComponent },
    {path:'SheduledPPTList',component:SheduledPPTListComponent},
    {path:'ViewCompany',component:CompanyListComponent},
  ],
},
{
  path: 'company',
  component: CompanyDashboardComponent,
  children: [
    {path:'offers',component:AllOffersComponent},
    {path:"",component:CompanyStatasticsComponent},
    {path:'CreateOffer', component: OfferFormComponent },
    {path:'ViewAppliaction' ,component:ViewApplicationComponent},
    {path:'viewJobProfile',component:ViewJobProfileComponent},
    {path:'Shortlisted',component:ShortlistedApplicationComponent},
    {path:'Selected',component:SelectedApplicationComponent},
    {path:'MyProfile',component:MyProfileComponent1},
    {path:'Statistics',component:CompanyStatasticsComponent}

  ],
},
{
  path: 'admin',
  component: AdminDashboardComponent,
  children: [
    {path:'AddCommitee',component:CommiteeRegistrationComponent},
    {path:"",component:StudentListComponent},
    {path:'PlacementStates', component: PlacementStatesComponent},
    

  ],
}],},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashboardRoutingModule { }
