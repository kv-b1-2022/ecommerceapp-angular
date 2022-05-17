import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCakesComponent } from './add-cakes/add-cakes.component';
import { CakesComponent } from './cakes/cakes.component';
import { DisplaycakesComponent } from './displaycakes/displaycakes.component';

const routes: Routes = [
  {path:'cakes',component:CakesComponent},
  {path:'displaycakes',component:DisplaycakesComponent},
  {path:'add-cakes',component:AddCakesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakesRoutingModule { }
