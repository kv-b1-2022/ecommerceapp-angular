import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakesRoutingModule } from './cakes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CakesComponent } from './cakes/cakes.component';
import { DisplaycakesComponent } from './displaycakes/displaycakes.component';



@NgModule({
  declarations: [CakesComponent, DisplaycakesComponent],
  imports: [
    CommonModule,
    CakesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class CakesModule { }
