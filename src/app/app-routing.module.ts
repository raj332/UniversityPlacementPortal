import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationMasterComponent } from './registration-master/registration-master.component';
const routes: Routes = [
  {path:'registration',loadChildren: () => import("./registration-master/registration-master.module").then(m => m.registrationMaster)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
