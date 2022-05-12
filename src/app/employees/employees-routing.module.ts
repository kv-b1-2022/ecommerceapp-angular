import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ListemployeesComponent } from './listemployees/listemployees.component';
const routes: Routes = [
  {path:'listemployee',component:ListemployeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
