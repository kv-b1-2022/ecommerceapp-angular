import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TransactiondetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class TransactionModule { }

