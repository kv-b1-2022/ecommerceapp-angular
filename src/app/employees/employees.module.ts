import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListemployeesComponent } from './listemployees/listemployees.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FormsModule } from '@angular/forms';
import { ListEmployeesTimesheetComponent } from './list-employees-timesheet/list-employees-timesheet.component';
import { FindemployeetimesheetComponent } from './findemployeetimesheet/findemployeetimesheet.component';
import { FindtimesheetbynameComponent } from './findtimesheetbyname/findtimesheetbyname.component';


@NgModule({
  declarations: [
    ListemployeesComponent,
    TimesheetComponent,
    ListEmployeesTimesheetComponent,
    FindemployeetimesheetComponent,
    FindtimesheetbynameComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule
  ]
})
export class EmployeesModule { }
