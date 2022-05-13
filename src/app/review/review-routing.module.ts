import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './add-review/add-review.component';
import { ListReviewComponent } from './list-review/list-review.component';

const routes: Routes = [
  {path:'add-review',component:AddReviewComponent},
  {path:'list-review',component:ListReviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
