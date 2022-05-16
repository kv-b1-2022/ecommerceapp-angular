import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponCodeRoutingModule } from './coupon-code-routing.module';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ApplyCouponComponent
  ],
  imports: [
    CommonModule,
    CouponCodeRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class CouponCodeModule { }
