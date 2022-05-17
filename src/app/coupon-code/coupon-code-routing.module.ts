import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';
import { ListCouponsComponent } from './list-coupons/list-coupons.component';

const routes: Routes = [
  {
    path: 'apply-coupon', component: ApplyCouponComponent,

  }, {
    path: 'list-coupons', component: ListCouponsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponCodeRoutingModule { }
