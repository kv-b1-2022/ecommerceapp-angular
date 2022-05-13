import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ListBusComponent } from './list-bus/list-bus.component';
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
  {path: 'update/:id', component: UpdateBusComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
