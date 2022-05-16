import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductStockComponent } from './add-product-stock/add-product-stock.component';
import { ProductStockListComponent } from './product-stock-list/product-stock-list.component';
import { ViewProductStockComponent } from './view-product-stock/view-product-stock.component';

const routes: Routes = [
  {path:'add-product-stock',component:AddProductStockComponent},
  {path:'product-stock-list',component:ProductStockListComponent},
  {path:'view-product-stock/:id',component:ViewProductStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
