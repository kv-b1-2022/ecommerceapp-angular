import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointsRoutingModule } from './points-routing.module';
import { RedeemPointsComponent } from './redeem-points/redeem-points.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CalculatePointsComponent } from './calculate-points/calculate-points.component';
//import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RedeemPointsComponent,
    CalculatePointsComponent
    //RegisterComponent
  ],
  imports: [
    CommonModule,
    PointsRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class PointsModule { }
