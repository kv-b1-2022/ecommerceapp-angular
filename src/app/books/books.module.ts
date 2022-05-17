import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaybookComponent } from './displaybook/displaybook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksRoutingModule } from './books-routing.module';
import { SearchbooknameComponent } from './searchbookname/searchbookname.component';
import { SearchbookdeptComponent } from './searchbookdept/searchbookdept.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';



@NgModule({
  declarations: [
    DisplaybookComponent,
    SearchbooknameComponent,
    SearchbookdeptComponent,
    AddbookComponent,
    DeletebookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
