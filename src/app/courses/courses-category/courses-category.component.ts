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
    
    const url = "http://localhost:8000/courses/CourseCategory";
    this.http.get(url).subscribe(res=>{
      
      this.courses=res;
    },err=>{
      console.log(err.error.message);
          this.toastr.error(err.error.message);
    })
  }

}
