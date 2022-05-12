import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';

const routes: Routes = [
  {
    path:'cardpayment',component:CardpaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
