import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatePointsComponent } from './calculate-points/calculate-points.component';
import { RedeemPointsComponent } from './redeem-points/redeem-points.component';

const routes: Routes = [
  {path:'redeem-points',component:RedeemPointsComponent},
  {path:'calculate-points/:amount',component:CalculatePointsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointsRoutingModule { }
