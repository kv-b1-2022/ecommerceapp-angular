import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaydressesComponent } from './displaydresses/displaydresses.component';
import { DressRoutingModule } from './dress-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListdressComponent } from './listdress/listdress.component';


@NgModule({
  declarations: [
    DisplaydressesComponent,
    ListdressComponent
    
  ],
  imports: [
    CommonModule,
    DressRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DressModule { }
