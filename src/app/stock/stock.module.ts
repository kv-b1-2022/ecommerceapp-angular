import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { AddProductStockComponent } from './add-product-stock/add-product-stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductStockListComponent } from './product-stock-list/product-stock-list.component';
import { ViewProductStockComponent } from './view-product-stock/view-product-stock.component';


@NgModule({
  declarations: [
    AddProductStockComponent,
    ProductStockListComponent,
    ViewProductStockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StockModule { }
