import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses-category',
  templateUrl: './courses-category.component.html',
  styles: [
  ]
})
export class CoursesCategoryComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showAvailableCourses()
  }
  courses!:any;
  showAvailableCourses(){
    
    const url = "https://courses-api.herokuapp.com/courses/CourseCategory";
    this.http.get(url).subscribe(res=>{
      
      this.courses=res;
    },err=>{
      console.log(err.error.message);
          this.toastr.error(err.error.message);
    })
  }

  name!: any;
  data! :any;
  search(){
    const name = this.name;
    const url ="https://courses-api.herokuapp.com/course/search/"+name;
    this.http.get(url).subscribe(res=>{
      this.data=res;
      window.location.href = "/viewcourse/"+this.data.id;       
    },err=>{
      console.log(err.error.message);
      this.toastr.error("Course not available");
    })
  }

}
