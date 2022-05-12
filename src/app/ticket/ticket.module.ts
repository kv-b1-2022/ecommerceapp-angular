import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TicketRoutingModule } from './ticket-routing.module';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';


@NgModule({
  declarations: [
    CreateTicketComponent,
    ListTicketsComponent,
    ViewTicketsComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class TicketModule { }
