import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from '../order/list-order/list-order.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {path:'tracking',component:TrackingComponent},
  {path:'list-orders',component:ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippmentRoutingModule { }
