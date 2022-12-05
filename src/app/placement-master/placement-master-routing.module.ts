import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlacementDriveComponent } from './add-placement-drive/add-placement-drive.component';
import { PrePlacementTalkListComponent } from './pre-placement-talk-list/pre-placement-talk-list.component';
import { PrePlacementVotingComponent } from './pre-placement-voting/pre-placement-voting.component';

const routes: Routes = [
  { path: 'addDrive', component: AddPlacementDriveComponent },
  { path: 'prePlacementTalkList', component: PrePlacementTalkListComponent },
  { path: 'prePlacementVoting', component: PrePlacementVotingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacementMasterRoutingModule {}
