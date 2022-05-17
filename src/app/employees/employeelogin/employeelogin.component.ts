import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.css'
  ]
})
export class EmployeeloginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private http: HttpClient, private toastr: ToastrService, private rt: Router) {



  }

  ngOnInit(): void {
  }
  login() {
    const userObj = {
      "empEmail": this.email,
      "empPassword": this.password

    };
    const url = "https://employeeapp-apii.herokuapp.com/emplogin/login";
    this.http.post(url, userObj).subscribe((res) => {
      console.log(res);
      localStorage.setItem("employee", JSON.stringify(res));
      this.toastr.success("successfully Logged In...");
      this.rt.navigate(['employeeprofile']);
    }, (err) => {
      console.log(err);
      this.toastr.error("You are not a registered user...... Please Register....");
    })
  }

}
