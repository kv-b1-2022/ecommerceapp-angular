import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-course-details',
  templateUrl: './view-course-details.component.html',
  styles: [
  ]
})
export class ViewCourseDetailsComponent implements OnInit {
  id: any;
  courseData: any;

  constructor(private http: HttpClient,private toastr:ToastrService,private route: ActivatedRoute) { }
  params!:any;
  courseId!:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewCourseDetails()
  }

  viewCourseDetails(){
    const url="http://localhost:8000/courses/viewcourse/"+this.id;
    this.http.get(url).subscribe(res=>{
      this.courseData=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

}
