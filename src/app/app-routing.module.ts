import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaybookComponent } from './books/displaybook/displaybook.component';
import { HomeComponent } from './home/home.component';
import { DeliveryStatusComponent } from './shippment/delivery-status/delivery-status.component';
import { TrackingComponent } from './shippment/tracking/tracking.component';


import { TransactiondetailsComponent } from './transaction/transactiondetails/transactiondetails.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'spinner',component:SpinnerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'transaction',component:TransactiondetailsComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
