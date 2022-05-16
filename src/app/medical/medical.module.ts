import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { DisplayMedicalsComponent } from './display-medicals/display-medicals.component';
// import { MedicalproductComponent } from './medicalproduct/medicalproduct.component';
// import { UpdatemedicalsComponent } from './updatemedicals/updatemedicals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdatemedicalsComponent } from './updatemedicals/updatemedicals.component';



@NgModule({
  declarations: [
    DisplayMedicalsComponent,
    // MedicalproductComponent,
    UpdatemedicalsComponent,
    AddProductComponent,
    UpdatemedicalsComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MedicalRoutingModule,
    
  ]
})
export class MedicalModule { }
