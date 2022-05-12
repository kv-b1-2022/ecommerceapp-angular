import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ViewCourseTypeComponent } from './view-course-type/view-course-type.component';
import { ListAllCoursesComponent } from './list-all-courses/list-all-courses.component';
import { ViewCourseDetailsComponent } from './view-course-details/view-course-details.component';
import { ViewEnrolledCoursesComponent } from './view-enrolled-courses/view-enrolled-courses.component';


@NgModule({
  declarations: [
    ViewCourseTypeComponent,
    ListAllCoursesComponent,
    ViewCourseDetailsComponent,
    ViewEnrolledCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
