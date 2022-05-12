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
import { TicketModule } from './ticket/ticket.module';
import { CakesModule } from './cakes/cakes.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
<<<<<<< HEAD
import { ApplyCouponComponent } from './apply-coupon/apply-coupon.component';
=======
import { EmployeesModule } from './employees/employees.module';
import { MembershipModule } from './membership/membership.module';

>>>>>>> cffcf4c7734449f91b9f5e890cb926538e6394a4
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ApplyCouponComponent
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
    CakesModule,
    GroceryModule,
    TicketModule,
    GroceryModule,
    EmployeesModule,
    OrderModule,
    MembershipModule,
    PaymentModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
