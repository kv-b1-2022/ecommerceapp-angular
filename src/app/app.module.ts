import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesModule } from './movies/movies.module';
import { GroceryModule } from './grocery/grocery.module';
import { EmployeesModule } from './employees/employees.module';
import { OrderModule } from './order/order.module';
import {PaymentModule} from './payment/payment.module'
import { CoursesModule } from './courses/courses.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    MoviesModule,
    GroceryModule,
    EmployeesModule,
    OrderModule,
    PaymentModule,
    CoursesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
