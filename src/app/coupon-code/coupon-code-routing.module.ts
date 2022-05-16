import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';

const routes: Routes = [
  {
    path:'apply-coupon',component:ApplyCouponComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponCodeRoutingModule { }
