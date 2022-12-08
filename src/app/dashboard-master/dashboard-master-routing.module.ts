import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { OfferFormComponent } from './company-dashboard/offer-form/offer-form.component';
import { JobProfileComponent } from './student-dashboard/job-profile/job-profile.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { PrePlacementVotingComponent } from '../placement-master/pre-placement-voting/pre-placement-voting.component';
import { PrePlacementTalkListComponent } from '../placement-master/pre-placement-talk-list/pre-placement-talk-list.component';

const routes: Routes = [
  { path: '', component: StudentDashboardComponent },
  {
    path: 'student',
    component: StudentDashboardComponent,
    children: [
      { path: 'AddJobProfile', component: JobProfileComponent },
      { path: 'prePlacementVoting', component: PrePlacementVotingComponent },
      { path: 'prePlacementTalkList',component: PrePlacementTalkListComponent},
    ],
  },
  {
    path: 'company',
    component: CompanyDashboardComponent,
    children: [{ path: 'createoffer', component: OfferFormComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashboardRoutingModule { }
