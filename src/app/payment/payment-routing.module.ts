import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmoneytowalletComponent } from './addmoneytowallet/addmoneytowallet.component';
import { BuyusingwalletComponent } from './buyusingwallet/buyusingwallet.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { ForgottransactionpinComponent } from './forgottransactionpin/forgottransactionpin.component';
import { WalletcardpaymentComponent } from './walletcardpayment/walletcardpayment.component';
import { WalletsetupComponent } from './walletsetup/walletsetup.component';

const routes: Routes = [
  { path:'cardpayment/:orderId/:amount',component:CardpaymentComponent},
  { path:'walletsetup',component:WalletsetupComponent},
  { path:'addmoneytowallet',component:AddmoneytowalletComponent},
  { path:'walletcardpayment/:amount',component:WalletcardpaymentComponent},
  { path:'buyusingwallet/:orderId/:amount',component:BuyusingwalletComponent},
  { path:'forgottransactionpin',component:ForgottransactionpinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
