import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydressesComponent } from './displaydresses/displaydresses.component';
import { ListdressComponent } from './listdress/listdress.component';

const routes: Routes = [
  {path:'displaydresses',component:DisplaydressesComponent},
  {path:'listdress',component:ListdressComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DressRoutingModule { }
