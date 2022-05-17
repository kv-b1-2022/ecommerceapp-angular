import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductpriceComponent } from './addproductprice/addproductprice.component';
import { ListProductPriceComponent } from './list-product-price/list-product-price.component';

const routes: Routes = [
  {path:'addproductprice', component: AddproductpriceComponent},
  {path:'list-product-price', component: ListProductPriceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductpriceRoutingModule { }
