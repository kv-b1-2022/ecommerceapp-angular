import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTrainComponent } from './display-train/display-train.component';
import { TrainRoutingModule } from './train-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DisplayTrainComponent
  ],
  imports: [
    CommonModule,
    TrainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TrainModule { }
