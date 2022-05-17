import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmembershipComponent } from '../addmembership/addmembership.component';

const routes: Routes = [

  
  {path:'addmembership',component:AddmembershipComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
