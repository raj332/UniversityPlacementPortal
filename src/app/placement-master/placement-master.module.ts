import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementMasterRoutingModule } from './placement-master-routing.module';
import { AddPlacementDriveComponent } from './add-placement-drive/add-placement-drive.component';
import { PrePlacementTalkListComponent } from './pre-placement-talk-list/pre-placement-talk-list.component';
import { PrePlacementVotingComponent } from './pre-placement-voting/pre-placement-voting.component';

import { MaterialDesignModuleModule } from '../material-design-module/material-design-module.module';
import { CompanyVotingComponent } from './company-voting/company-voting.component';

@NgModule({
  declarations: [
    AddPlacementDriveComponent,
    PrePlacementTalkListComponent,
    PrePlacementVotingComponent,
    CompanyVotingComponent,
  ],
  imports: [
    CommonModule,
    PlacementMasterRoutingModule,
    MaterialDesignModuleModule,
  ],
})
export class PlacementMasterModule {}
