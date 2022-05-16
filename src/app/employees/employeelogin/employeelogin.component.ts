import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styles: [
  ]
})
export class EmployeeloginComponent implements OnInit {
  email!:string;
  password!:string;

  constructor(private http:HttpClient,private toastr: ToastrService) {
    
    
    
   }

  ngOnInit(): void {
  }
  login()
  {
    const userObj={
      "empEmail":this.email,
      "empPassword":this.password
  
    };
    const url="http://localhost:9000/emplogin/login";
       this.http.post(url,userObj).subscribe((res)=>{
         console.log(res);
         this.toastr.success("successfully Logged In...");
       },(err)=>{
         console.log(err);
         this.toastr.error("You are not a registered user...... Please Register....");
       })
  }
  
}
