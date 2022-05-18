import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AuthGuard } from '../auth.guard';
import { CoursesCategoryComponent } from './courses-category/courses-category.component';
import { ListAllCoursesComponent } from './list-all-courses/list-all-courses.component';
import { ListcourseComponent } from './listcourse/listcourse.component';
import { ViewCourseDetailsComponent } from './view-course-details/view-course-details.component';
import { ViewCourseTypeComponent } from './view-course-type/view-course-type.component';
import { ViewEnrolledCoursesComponent } from './view-enrolled-courses/view-enrolled-courses.component';

const routes: Routes = [
  {path:'coursesbytype/:cid',component:ViewCourseTypeComponent},
  {path:'viewallcourses',component:ListAllCoursesComponent},
  {path:'viewcourse/:id',component:ViewCourseDetailsComponent},
  {path:'enrolledcourses/:uid',component:ViewEnrolledCoursesComponent,canActivate:[AuthGuard]},
  {path:'coursestype',component:CoursesCategoryComponent},
  {path:'list-courses',component:ListcourseComponent},
  {path:'add-courses',component:AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
