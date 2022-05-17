import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ListBusComponent } from './list-bus/list-bus.component';
import { ListBusesAdminComponent } from './list-buses-admin/list-buses-admin.component';
import { ListBusesComponent } from './list-buses/list-buses.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path: 'add-bus', component: AddBusComponent},
  {path: 'buses', component: ListBusesComponent},
  {path: 'buses/:id', component: ListBusComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'users/:id', component: ViewUserComponent},
  {path: 'update/:id', component: UpdateBusComponent},
  {path: 'list-buses-admin',component: ListBusesAdminComponent},
  {path: 'book-ticket/:id',component: BookTicketComponent},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
