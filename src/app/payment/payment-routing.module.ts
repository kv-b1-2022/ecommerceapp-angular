import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { VerifycardComponent } from './verifycard/verifycard.component';

const routes: Routes = [
  { path:'cardpayment',component:CardpaymentComponent},
  {path:'verifycard',component:VerifycardComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
