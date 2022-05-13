import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-category',
  templateUrl: './courses-category.component.html',
  styles: [
  ]
})
export class CoursesCategoryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.showAvailableCourses()
  }
  courses!:any;
  showAvailableCourses(){
    
    const url = "http://localhost:9000/courses/CourseCategory";
    this.http.get(url).subscribe(res=>{
      
      this.courses=res;
    },err=>{
      console.log(err.error.message);
          alert(err.error.message);
    })
  }

}
