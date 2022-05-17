import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DisplayMedicalsComponent } from './display-medicals/display-medicals.component';
import { MedicalproductComponent } from './medicalproduct/medicalproduct.component';

import { UpdatemedicalsComponent } from './updatemedicals/updatemedicals.component';


const routes: Routes = [
  {path:'displayMedicals',component:DisplayMedicalsComponent},
  { path:'medicalproduct',component:MedicalproductComponent}, 
  {path:'updatemedicals/:id',component:UpdatemedicalsComponent},
  {path:'add-product',component:AddProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalRoutingModule { }
