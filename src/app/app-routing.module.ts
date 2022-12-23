import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  { path: 'auth', loadChildren: () => import("./registration-master/registration-master.module").then(m => m.registrationMaster) },
  { path: 'dashboard', loadChildren: () => import("./dashboard-master/dashboard-master.module").then(m => m.dashboardMaster) },
   { path:'placement',loadChildren: () => import("./placement-master/placement-master.module").then(m => m.PlacementMasterModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
