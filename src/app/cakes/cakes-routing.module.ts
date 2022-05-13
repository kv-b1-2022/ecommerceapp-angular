import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';;
import { CakesComponent } from './cakes/cakes.component';
import { DisplaycakesComponent } from './displaycakes/displaycakes.component';

const routes: Routes = [
  {path:'cakes',component:CakesComponent},
  {path:'displaycakes',component:DisplaycakesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CakesRoutingModule { }
