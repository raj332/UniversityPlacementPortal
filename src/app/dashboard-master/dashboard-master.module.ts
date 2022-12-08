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
import {MatSelectModule} from '@angular/material/select';
import { UploaderModule } from "angular-uploader";
import {MatCardModule} from '@angular/material/card';
import { AddExperienceComponent } from './student-dashboard/job-profile/add-experience/add-experience.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferFormComponent } from './company-dashboard/offer-form/offer-form.component';
@NgModule({
  declarations: [
    StudentDashboardComponent,
    CompanyDashboardComponent,
    JobProfileComponent,
    AddExperienceComponent,
    OfferFormComponent
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
    dashboardRoutingModule,
    UploaderModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule,
    MatPaginatorModule,
    MatTableModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
  ]

})
export class dashboardMaster { }
