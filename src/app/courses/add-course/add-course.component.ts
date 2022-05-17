import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styles: [
  ]
})
export class AddCourseComponent implements OnInit {
  id!:number;
  category!:any;
  name!:any;
  tutor!:any;
  duration!:any;
  description!:any;
  image!:any;
  video!:any;
  constructor(private http : HttpClient, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addCourse(){
    const course={
      cid:this.id,
      category:this.category,
      cname:this.name,
      tutor:this.tutor,
      duration:this.duration,
      description:this.description,
      imageurl:this.image,
      url:this.video
    }
    const url="http://courses-api.herokuapp.com/course/add";
    this.http.post(url,course).subscribe(res=>{
      this.toastr.success("Successfully added");
    },err=>{
      console.log(err.error.message);
      this.toastr.error(err.error.message);
    })
  }

}
