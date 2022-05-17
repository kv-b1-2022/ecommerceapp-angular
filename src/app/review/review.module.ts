import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { AddReviewComponent } from './add-review/add-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListReviewComponent } from './list-review/list-review.component';
import { ViewReviewComponent } from './view-review/view-review.component';




@NgModule({
  declarations: [
    AddReviewComponent,
    ListReviewComponent,
    ViewReviewComponent,
  
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReviewRoutingModule,
  
  ]
})
export class ReviewModule { }
