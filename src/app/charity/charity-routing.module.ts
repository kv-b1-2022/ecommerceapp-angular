import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './donate/donate.component';
import { ListTrustComponent } from './list-trust/list-trust.component';

const routes: Routes = [
  {path:'list-trust',component: ListTrustComponent},
  {path:'donate',component:DonateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharityRoutingModule { }
