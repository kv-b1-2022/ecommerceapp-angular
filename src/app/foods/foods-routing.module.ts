import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../auth/role.guard';
import { AdminComponent } from './admin/admin.component';
import { AllMenusComponent } from './all-menus/all-menus.component';
import { FoodsModule } from './foods.module';
import { MenusComponent } from './menus/menus.component';
import { NonVegetarianComponent } from './non-vegetarian/non-vegetarian.component';
import { StartersComponent } from './starters/starters.component';
import { VegetarianComponent } from './vegetarian/vegetarian.component';
import { ViewFoodsComponent } from './view-foods/view-foods.component';
const routes: Routes = [
  {path:'menus',component:MenusComponent},
  {path:'admin',component:AdminComponent,canActivate:[RoleGuard]},
  {path:'all-menus',component:AllMenusComponent},
  {path:'non-vegetarian',component:NonVegetarianComponent},
  {path:'vegetarian',component:VegetarianComponent},
  {path:'starters',component:StartersComponent},
  {path:'view-foods/:search',component:ViewFoodsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodsRoutingModule { }
