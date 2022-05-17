import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaybookComponent } from './books/displaybook/displaybook.component';
import { HomeComponent } from './home/home.component';
import { TransactiondetailsComponent } from './transaction/transactiondetails/transactiondetails.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'transaction', component: TransactiondetailsComponent},

  
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
