import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-course-type',
  templateUrl: './view-course-type.component.html',
  styles: [
  ]
})
export class ViewCourseTypeComponent implements OnInit {
  id!: any;
  courseData!: any;

  constructor(private route: ActivatedRoute,private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['cid'];
    this.CourseByType()
  }

  CourseByType(){
    const url="https://courses-api.herokuapp.com/courses/viewbytype?cId="+this.id;
    this.http.get(url).subscribe(res=>{
      this.courseData=res;
    },err=>{
      console.log(err.error.message);
      this.toastr.error(err.error.message);
     // alert(err.error.message);
    })
  }
  

}
