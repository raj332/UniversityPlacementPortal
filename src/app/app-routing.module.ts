import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'registration', loadChildren: () => import("./registration-master/registration-master.module").then(m => m.registrationMaster) },
  { path:'dashboard',loadChildren: () => import("./dashboard-master/dashboard-master.module").then(m => m.dashboardMaster)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
