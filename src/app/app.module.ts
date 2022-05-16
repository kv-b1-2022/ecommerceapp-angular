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
import { ReviewModule } from './review/review.module';
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
import { CouponCodeModule } from './coupon-code/coupon-code.module';


import { ProductpriceModule } from './productprice/productprice.module';


import { BusModule } from './bus/bus.module';
import { TrainModule } from './train/train.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminSidebarComponent,
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
    ReviewModule,    
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
    PayrollModule,
    ProductpriceModule,
    NgbModule,
    StockModule,
    BusModule,
    TrainModule,
    CouponCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
