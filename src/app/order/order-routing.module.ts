import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyCouponComponent } from '../coupon-code/apply-coupon/apply-coupon.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { MyorderComponent } from './myorder/myorder.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

const routes: Routes = [
  {path:'create-order',component:CreateOrderComponent},
  {path:'list-order',component:ListOrderComponent},
  {path:'my-order',component:MyorderComponent},
  {path:'apply',component:ApplyCouponComponent},

  {path:'ordersummary',component:OrdersummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
