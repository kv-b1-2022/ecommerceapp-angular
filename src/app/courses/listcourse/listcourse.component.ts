import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styles: [
  ]
})
export class ListcourseComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.listcourses();
  }
  courselist!:any;
  listcourses(){
    const url="https://courses-api.herokuapp.com/course/list";
    this.http.get(url).subscribe(res=>{
      this.courselist=res;
    },err=>{
      console.log(err.error.message);
      this.toastr.error(err.error.message);
    })
  }

}
