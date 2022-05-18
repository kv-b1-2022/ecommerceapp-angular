import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ViewCourseTypeComponent } from './view-course-type/view-course-type.component';
import { ListAllCoursesComponent } from './list-all-courses/list-all-courses.component';
import { ViewCourseDetailsComponent } from './view-course-details/view-course-details.component';
import { ViewEnrolledCoursesComponent } from './view-enrolled-courses/view-enrolled-courses.component';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { ListcourseComponent } from './listcourse/listcourse.component';
import { DataTablesModule } from 'angular-datatables';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewCourseTypeComponent,
    ListAllCoursesComponent,
    ViewCourseDetailsComponent,
    ViewEnrolledCoursesComponent,
    CoursesCategoryComponent,
    ListcourseComponent,
    AddCourseComponent,
    
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    CoursesRoutingModule,
    FormsModule
  ]
})
export class CoursesModule { }
