import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductpriceRoutingModule } from './productprice-routing.module';
import { AddproductpriceComponent } from './addproductprice/addproductprice.component';
import { ListProductPriceComponent } from './list-product-price/list-product-price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AddproductpriceComponent,
    ListProductPriceComponent
  ],
  imports: [
    CommonModule,
    ProductpriceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ]
})
export class ProductpriceModule { }
