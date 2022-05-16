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
<<<<<<< HEAD
import { MedicalModule } from './medical/medical.module';
=======


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
<<<<<<< HEAD
import { CharityModule } from './charity/charity.module';
=======
import { CouponCodeModule } from './coupon-code/coupon-code.module';


import { ProductpriceModule } from './productprice/productprice.module';
import { BusModule } from './bus/bus.module';
import { TrainModule } from './train/train.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AuthModule } from './auth/auth.module';
import { DataTablesModule } from 'angular-datatables';
import { FoodsModule } from './foods/foods.module';
>>>>>>> c12956a550611301fa05d344fc91a5e13951df55

>>>>>>> 346aa9bc6a5c519ebcd10c60786946f4ab8105b4

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminSidebarComponent,
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
<<<<<<< HEAD
    MedicalModule
  
=======
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
    PayrollModule,
<<<<<<< HEAD
    CharityModule
>>>>>>> 346aa9bc6a5c519ebcd10c60786946f4ab8105b4

=======
    BusModule,
    TrainModule,
    CouponCodeModule,
    AuthModule,
    DataTablesModule,
    FoodsModule
>>>>>>> c12956a550611301fa05d344fc91a5e13951df55
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
