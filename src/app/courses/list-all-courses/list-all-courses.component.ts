import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-all-courses',
  templateUrl: './list-all-courses.component.html',
  styles: [
  ]
})
export class ListAllCoursesComponent implements OnInit {

  constructor(private http: HttpClient,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.listCourses()
  }

  courses!:any;
  listCourses(){

    const url = "http://localhost:8000/course/list";
    this.http.get(url).subscribe(res=>{
      this.courses=res;
    },err=>{
      console.log(err.error.message);
          this.toastr.error(err.error.message);
    })
  }
  courseDetails!:any;
  name!:any;
  data!:any;
  // search(){
  //     const cname=this.name;
  //     const url = "http://localhost:8000/course/search/"+cname;
  //     this.http.get(url).subscribe(res=>{
  //       this.courseDetails=JSON.stringify(res);
  //       console.log(this.courseDetails);
  //       this.data = JSON.parse(this.courseDetails);
  //       window.location.href="/viewcourse/"+this.data.id;
  //     },err=>{
  //       console.log(err.error.message);
  //       this.toastr.error(err.error.message);
  //     })
  // }

}
