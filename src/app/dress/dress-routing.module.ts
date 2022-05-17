import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from '../grocery/addtocart/addtocart.component';
import { DisplaydressesComponent } from './displaydresses/displaydresses.component';
import { ListdressComponent } from './listdress/listdress.component';

const routes: Routes = [
  {path:'displaydresses',component:DisplaydressesComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'listdress',component:ListdressComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DressRoutingModule { }
