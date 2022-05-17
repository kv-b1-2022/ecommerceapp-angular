import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponCodeRoutingModule } from './coupon-code-routing.module';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListCouponsComponent } from './list-coupons/list-coupons.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ApplyCouponComponent,
    ListCouponsComponent
  ],
  imports: [
    CommonModule,
    CouponCodeRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports:[ApplyCouponComponent]
})
export class CouponCodeModule { }
