import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListemployeesComponent } from './listemployees/listemployees.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';


@NgModule({
  declarations: [
    ListemployeesComponent,
    EmployeeloginComponent,
    EmployeedetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
