import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GroceryRoutingModule } from './grocery-routing.module';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';


@NgModule({
  declarations: [AddproductsComponent,AddtocartComponent,DisplayproductsComponent,ListproductsComponent,UpdateproductsComponent],
  imports: [
    CommonModule,
    GroceryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class GroceryModule { }
