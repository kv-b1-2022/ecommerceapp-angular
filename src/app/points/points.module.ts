import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsRoutingModule } from './points-routing.module';
import { RedeemPointsComponent } from './redeem-points/redeem-points.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RedeemPointsComponent
  ],
  imports: [
    CommonModule,
    PointsRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class PointsModule { }
