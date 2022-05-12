import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllCoursesComponent } from './list-all-courses/list-all-courses.component';
import { ViewCourseDetailsComponent } from './view-course-details/view-course-details.component';
import { ViewCourseTypeComponent } from './view-course-type/view-course-type.component';
import { ViewEnrolledCoursesComponent } from './view-enrolled-courses/view-enrolled-courses.component';

const routes: Routes = [
  {path:'coursetype',component:ViewCourseTypeComponent},
  {path:'viewallcourses',component:ListAllCoursesComponent},
  {path:'viewcourse',component:ViewCourseDetailsComponent},
  {path:'enrolledcourses',component:ViewEnrolledCoursesComponent},
  {path:'', redirectTo:'coursetype',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
