import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { WalletsetupComponent } from './walletsetup/walletsetup.component';
import { AddmoneytowalletComponent } from './addmoneytowallet/addmoneytowallet.component';
import { WalletcardpaymentComponent } from './walletcardpayment/walletcardpayment.component';
import { BuyusingwalletComponent } from './buyusingwallet/buyusingwallet.component';
import { ForgottransactionpinComponent } from './forgottransactionpin/forgottransactionpin.component';
import { WallettransactionsComponent } from './wallettransactions/wallettransactions.component';



@NgModule({
  declarations: [
    CardpaymentComponent,
    WalletsetupComponent,
    AddmoneytowalletComponent,
    WalletcardpaymentComponent,
    BuyusingwalletComponent,
    ForgottransactionpinComponent,
    WallettransactionsComponent,
   
   
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
     
  ]
})
export class PaymentModule { }
