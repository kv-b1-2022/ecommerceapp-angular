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
<<<<<<< HEAD
  {path:'apply',component:ApplyCouponComponent}

=======
  {path:'ordersummary',component:OrdersummaryComponent}
>>>>>>> 84abd206bbc666bcf400f8a09a594ca6f2d1e41c
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
