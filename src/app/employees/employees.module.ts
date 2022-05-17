import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ListemployeesComponent } from './listemployees/listemployees.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GetEmployeedetailsComponent } from './get-employeedetails/get-employeedetails.component';
import { EmployeeregisterComponent } from './employeeregister/employeeregister.component';

import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { LeavestatusComponent } from './leavestatus/leavestatus.component';
import { SalaryprocessComponent } from './salaryprocess/salaryprocess.component';



@NgModule({
  declarations: [
    ListemployeesComponent,
    EmployeeloginComponent,
    EmployeedetailsComponent,
    GetEmployeedetailsComponent,
    EmployeeregisterComponent,

    ApplyleaveComponent,
    LeavelistComponent,
    LeavestatusComponent,

    SalaryprocessComponent

  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
export class EmployeesModule { }
