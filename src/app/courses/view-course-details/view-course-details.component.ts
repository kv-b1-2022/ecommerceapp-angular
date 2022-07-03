import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-view-course-details',
  templateUrl: './view-course-details.component.html',
  styles: [
  ]
})
export class ViewCourseDetailsComponent implements OnInit {
  id: any;
  courseData: any;
  loggedUserId = this.authService.getUser()?.id;
  constructor(private http: HttpClient,private toastr:ToastrService,private route: ActivatedRoute,private authService:AuthService) { }
  params!:any;
  courseId!:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.viewCourseDetails()
  }

  viewCourseDetails(){
    const url="https://courses-api.herokuapp.com/courses/viewcourse/"+this.id;
    this.http.get(url).subscribe(res=>{
      this.courseData=res;
    },err=>{
      console.log(err.error.message);
      alert(err.error.message);
    })
  }

  isLoggedIn(){
    let user = this.authService.getUser();
    if(user == null){
      return false;
    }
    return true;
  }

  enroll(){

    let cId=this.id;
    let uId=this.loggedUserId;
    const url="http://courses-api.herokuapp.com/course/enroll/"+cId+"/"+uId;
    this.http.get(url).subscribe(res=>{
      this.toastr.success("Successfully Enrolled");
    },err=>{
      console.log(err.error.message);
      this.toastr.error("Already Enrolled");
    })
  }



}
