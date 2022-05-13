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
<<<<<<< HEAD
import { ReviewModule } from './review/review.module';
=======
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { CakesModule } from './cakes/cakes.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { CoursesModule } from './courses/courses.module';
import { EmployeesModule } from './employees/employees.module';
import { MembershipModule } from './membership/membership.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { StockModule } from './stock/stock.module';
import { PayrollModule } from './payroll/payroll.module';
>>>>>>> 12f9ba346490caa955c4fb9dfb4d00680d915fa7


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
<<<<<<< HEAD
  
 
=======
>>>>>>> 12f9ba346490caa955c4fb9dfb4d00680d915fa7
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
<<<<<<< HEAD
    ReviewModule,
    
=======
    UserModule,
    CakesModule,
    GroceryModule,
    TicketModule,
    GroceryModule,
    EmployeesModule,
    OrderModule,
    PaymentModule,
    CoursesModule,
    MembershipModule,
    PaymentModule,
    NgbModule,
    StockModule,
    PayrollModule
>>>>>>> 12f9ba346490caa955c4fb9dfb4d00680d915fa7

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
