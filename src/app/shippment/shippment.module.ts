import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippmentRoutingModule } from './shippment-routing.module';
import { TrackingComponent } from './tracking/tracking.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DeliveryStatusComponent } from './delivery-status/delivery-status.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';


@NgModule({
  declarations: [
    TrackingComponent,
    DeliveryStatusComponent,
    ListOrdersComponent
  ],
  imports: [
    CommonModule,
    ShippmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ]
})
export class ShippmentModule { }
