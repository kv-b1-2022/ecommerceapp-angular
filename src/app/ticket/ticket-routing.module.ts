import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';

const routes: Routes = [
  {path:'create-ticket',component:CreateTicketComponent},
  {path:'list-tickets',component:ListTicketsComponent},
  {path:'view-tickets/:id',component:ViewTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
