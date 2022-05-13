import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import{ ListemployeesComponent } from './listemployees/listemployees.component';
const routes: Routes = [
  {path:'listemployee',component:ListemployeesComponent},
  {path:'employeelogin',component:EmployeeloginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
