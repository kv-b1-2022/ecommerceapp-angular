import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ListTicketsComponent } from './list-tickets/list-tickets.component';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';

const routes: Routes = [
  {path:'create-ticket',component:CreateTicketComponent,canActivate:[AuthGuard]},
  {path:'list-tickets',component:ListTicketsComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'view-tickets/:id',component:ViewTicketsComponent,canActivate:[AuthGuard,RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
