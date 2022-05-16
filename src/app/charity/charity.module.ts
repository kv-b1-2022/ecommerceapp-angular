import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharityRoutingModule } from './charity-routing.module';
import { ListTrustComponent } from './list-trust/list-trust.component';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [
    ListTrustComponent,
    DonateComponent
  ],
  imports: [
    CommonModule,
    CharityRoutingModule
  ]
})
export class CharityModule { }
