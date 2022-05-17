import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListBusComponent } from './list-bus/list-bus.component';
import { ListBusesComponent } from './list-buses/list-buses.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ListBusesAdminComponent } from './list-buses-admin/list-buses-admin.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    ListBusComponent,
    ListBusesComponent,
    ViewUserComponent,
    UpdateBusComponent,
    AddBusComponent,
    ListBusesAdminComponent,
    BookTicketComponent
  
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BusModule { }
