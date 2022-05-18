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
import { MedicalModule } from './medical/medical.module';

import { FoodsModule } from './foods/foods.module';
<<<<<<< HEAD
=======
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


>>>>>>> c8f475af898a7070e43f64ec13bf3105e088063f
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

<<<<<<< HEAD
=======






>>>>>>> 0ece00c06771f0e020b0349bec860dcb78928bf0
import { StockModule } from './stock/stock.module';
import { PayrollModule } from './payroll/payroll.module';

import { CharityModule } from './charity/charity.module';
import { CouponCodeModule } from './coupon-code/coupon-code.module';

import { DressModule } from './dress/dress.module';
import { ProductpriceModule } from './productprice/productprice.module';
import { BusModule } from './bus/bus.module';
import { TrainModule } from './train/train.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
import { DataTablesModule } from 'angular-datatables';
import { PointsModule } from './points/points.module';
=======

import { BooksModule } from './books/books.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { EmployeeProfilepageComponent } from './employee-profilepage/employee-profilepage.component';
import { ElectronicsModule } from './Electronics/electronics.module';
>>>>>>> c8f475af898a7070e43f64ec13bf3105e088063f



=======

import { EmployeeProfilepageComponent } from './employee-profilepage/employee-profilepage.component';
import { ElectronicsModule } from './Electronics/electronics.module';
import { TransactionModule } from './transaction/transaction.module';



import { SpinnerComponent } from './spinner/spinner.component';
>>>>>>> 0ece00c06771f0e020b0349bec860dcb78928bf0

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminSidebarComponent,
    EmployeeProfilepageComponent,
<<<<<<< HEAD
    HeaderComponent
=======
    SpinnerComponent
    
>>>>>>> 0ece00c06771f0e020b0349bec860dcb78928bf0

  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(), 
    MoviesModule,
    MedicalModule,
    ReviewModule,    
    UserModule,
    CakesModule,
    GroceryModule,
    TicketModule,
   
    EmployeesModule,
    OrderModule,
<<<<<<< HEAD
    PaymentModule,
=======
    
    // NgChartsModule,
>>>>>>> 0ece00c06771f0e020b0349bec860dcb78928bf0
    CoursesModule,
    MembershipModule,
    PaymentModule,
    
    ProductpriceModule,
    NgbModule,
    StockModule,
    PayrollModule,
    BusModule,
    CharityModule,
    
    TrainModule,
    CouponCodeModule,
    AuthModule,
  
    FoodsModule,
    DressModule,
<<<<<<< HEAD
    PointsModule
=======
    BooksModule,
    ElectronicsModule,
    TransactionModule,
    ElectronicsModule
    

>>>>>>> c8f475af898a7070e43f64ec13bf3105e088063f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
