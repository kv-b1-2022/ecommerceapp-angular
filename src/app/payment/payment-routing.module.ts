import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddmoneytowalletComponent } from './addmoneytowallet/addmoneytowallet.component';
import { BuyusingwalletComponent } from './buyusingwallet/buyusingwallet.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { ForgottransactionpinComponent } from './forgottransactionpin/forgottransactionpin.component';
import { WalletcardpaymentComponent } from './walletcardpayment/walletcardpayment.component';
import { WalletsetupComponent } from './walletsetup/walletsetup.component';
import { WallettransactionsComponent } from './wallettransactions/wallettransactions.component';

const routes: Routes = [
  { path:'cardpayment/:orderId/:amount',component:CardpaymentComponent,canActivate:[AuthGuard]},
  { path:'walletsetup',component:WalletsetupComponent,canActivate:[AuthGuard]},
  { path:'addmoneytowallet',component:AddmoneytowalletComponent,canActivate:[AuthGuard]},
  { path:'walletcardpayment/:amount',component:WalletcardpaymentComponent,canActivate:[AuthGuard]},
  { path:'buyusingwallet/:orderId/:amount',component:BuyusingwalletComponent,canActivate:[AuthGuard]},
  { path:'forgottransactionpin',component:ForgottransactionpinComponent,canActivate:[AuthGuard]},
  { path:'wallettransactions',component:WallettransactionsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
