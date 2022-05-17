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


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
