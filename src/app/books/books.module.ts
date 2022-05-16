import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DisplaybookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BooksModule { }
