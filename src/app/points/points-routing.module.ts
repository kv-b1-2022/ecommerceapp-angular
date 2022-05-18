import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedeemPointsComponent } from './redeem-points/redeem-points.component';

const routes: Routes = [
  {path:'redeem-points',component:RedeemPointsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointsRoutingModule { }
