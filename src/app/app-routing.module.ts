import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeliveryStatusComponent } from './shippment/delivery-status/delivery-status.component';
import { TrackingComponent } from './shippment/tracking/tracking.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  
  
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
