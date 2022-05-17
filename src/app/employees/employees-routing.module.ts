import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindemployeetimesheetComponent } from './findemployeetimesheet/findemployeetimesheet.component';
import { FindtimesheetbynameComponent } from './findtimesheetbyname/findtimesheetbyname.component';
import { ListEmployeesTimesheetComponent } from './list-employees-timesheet/list-employees-timesheet.component';
import{ ListemployeesComponent } from './listemployees/listemployees.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
const routes: Routes = [
  {path:'listemployee',component:ListemployeesComponent},
  {path:'timesheet',component:TimesheetComponent},
  {path:'listemployeestimesheet',component:ListEmployeesTimesheetComponent},
  {path:'findemployeetimesheet/:name',component:FindemployeetimesheetComponent},
  {path:'findtimesheetbyname',component:FindtimesheetbynameComponent}

import { EmployeeProfilepageComponent } from '../employee-profilepage/employee-profilepage.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';
import { GetEmployeedetailsComponent } from './get-employeedetails/get-employeedetails.component';
import{ ListemployeesComponent } from './listemployees/listemployees.component';
import { SalaryprocessComponent } from './salaryprocess/salaryprocess.component';
const routes: Routes = [
  {path:'listemployeeDocument',component:ListemployeesComponent},
  {path:'employeelogin',component:EmployeeloginComponent},
  {path:'listemployees',component:EmployeedetailsComponent},
  {path:'get-employeedetails',component:GetEmployeedetailsComponent},
  {path:'listemployees/employeeregister',component:EmployeeregisterComponent},
  {path:'salaryprocess',component:SalaryprocessComponent},
  {path:'employeeprofile',component:EmployeeProfilepageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
