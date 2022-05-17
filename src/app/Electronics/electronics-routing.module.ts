import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [
  {path:'listelectronicproducts',component:ListproductsComponent},
  {path:'listelectronics',component:ListproductsComponent},
  {path:'viewproducts/:id',component:ViewproductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
