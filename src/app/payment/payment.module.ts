import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { VerifycardComponent } from './verifycard/verifycard.component';


@NgModule({
  declarations: [
    CardpaymentComponent,
    VerifycardComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
