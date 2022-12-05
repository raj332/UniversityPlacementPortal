import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementMasterRoutingModule } from './placement-master-routing.module';
import { AddPlacementDriveComponent } from './add-placement-drive/add-placement-drive.component';
import { PrePlacementTalkListComponent } from './pre-placement-talk-list/pre-placement-talk-list.component';
import { PrePlacementVotingComponent } from './pre-placement-voting/pre-placement-voting.component';


@NgModule({
  declarations: [
    AddPlacementDriveComponent,
    PrePlacementTalkListComponent,
    PrePlacementVotingComponent
  ],
  imports: [
    CommonModule,
    PlacementMasterRoutingModule
  ]
})
export class PlacementMasterModule { }
