import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-enrolled-courses',
  templateUrl: './view-enrolled-courses.component.html',
  styles: [
  ]
})
export class ViewEnrolledCoursesComponent implements OnInit {
  id: any;
  courseData: any;

  constructor(private http:HttpClient,private route:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['uid'];
    this.viewEnrolledCourses();
  }

  viewEnrolledCourses(){
    const url="http://localhost:9000/courses/enrolledlist/"+this.id;
    this.http.get(url).subscribe(res=>{
      console.log(res)
      this.courseData=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

}
