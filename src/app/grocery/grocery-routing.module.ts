import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { RoleGuard } from '../auth/role.guard';

const routes: Routes = [
  {path:'listproducts',component:ListproductsComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'addproducts',component:AddproductsComponent},
  {path:'displayproducts',component:DisplayproductsComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'updateproducts/:id',component:UpdateproductsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryRoutingModule { }
