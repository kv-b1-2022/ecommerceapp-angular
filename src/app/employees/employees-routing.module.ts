import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';
import { GetEmployeedetailsComponent } from './get-employeedetails/get-employeedetails.component';
import{ ListemployeesComponent } from './listemployees/listemployees.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeavelistComponent } from './leavelist/leavelist.component';


const routes: Routes = [
  {path:'listemployeeDocument',component:ListemployeesComponent},
  {path:'employeelogin',component:EmployeeloginComponent},
  {path:'listemployees',component:EmployeedetailsComponent},
  {path:'get-employeedetails',component:GetEmployeedetailsComponent},
  {path:'employeeregister',component:EmployeeregisterComponent},
  {path:'leavestatus',component:LeavestatusComponent},
  {path:'applyleave',component:ApplyleaveComponent},
  {path:'leavelist',component:LeavelistComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
