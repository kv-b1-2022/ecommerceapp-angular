import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { MyorderComponent } from './myorder/myorder.component';
import { CouponCodeModule } from '../coupon-code/coupon-code.module';

import { OrdersummaryComponent } from './ordersummary/ordersummary.component';


@NgModule({
  declarations: [
    CreateOrderComponent,
    ListOrderComponent,
    MyorderComponent,

   
    OrdersummaryComponent
   
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CouponCodeModule
  ]
 
})
export class OrderModule { }
