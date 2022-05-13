import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponCodeRoutingModule } from './coupon-code-routing.module';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';


@NgModule({
  declarations: [
    ApplyCouponComponent
  ],
  imports: [
    CommonModule,
    CouponCodeRoutingModule
  ]
})
export class CouponCodeModule { }
