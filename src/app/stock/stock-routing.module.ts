import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductStockComponent } from './add-product-stock/add-product-stock.component';

const routes: Routes = [
  {path:'add-product-stock',component:AddProductStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
