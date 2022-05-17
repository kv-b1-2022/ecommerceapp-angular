import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-list-all-courses',
  templateUrl: './list-all-courses.component.html',
  styles: [
  ]
})
export class ListAllCoursesComponent implements OnInit {
  userId = this.authService.getUser()?.id;
  constructor(private http: HttpClient,private toastr : ToastrService, private authService:AuthService) { }

  ngOnInit(): void {
    this.listCourses()
  }

  courses!:any;
  listCourses(){

    const url = "https://courses-api.herokuapp.com/course/list";
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
}
