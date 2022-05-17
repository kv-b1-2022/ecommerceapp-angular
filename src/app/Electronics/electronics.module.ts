import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';


@NgModule({
  declarations: [
    ListproductsComponent,
    ViewproductsComponent,
  ],
  imports: [
    CommonModule,
    ElectronicsRoutingModule
  ]
})
export class ElectronicsModule { }
