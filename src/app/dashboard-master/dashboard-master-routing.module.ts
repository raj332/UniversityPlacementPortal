import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobProfileComponent } from './student-dashboard/job-profile/job-profile.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
const routes: Routes = [
  { path: '', component: StudentDashboardComponent },
  {
    path: 'student', component: StudentDashboardComponent,
    children: [{ path: 'AddJobProfile', component: JobProfileComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class dashboardRoutingModule { }
