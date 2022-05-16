import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTrustComponent } from './list-trust/list-trust.component';

const routes: Routes = [
  {path:'list-trust',component: ListTrustComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharityRoutingModule { }
