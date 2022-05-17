import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeeregister',
  templateUrl: './employeeregister.component.html',
  styleUrls: ['./employeeregister.css'
  ]
})
export class EmployeeregisterComponent implements OnInit {
  empname!: string;
  empEmail!: string;
  empPassword!: string;

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  empregister()
  {
    const userObj={
      "empName":this.empname,
      "empEmail":this.empEmail,
      "empPassword":this.empPassword
    };
    const url="https://employeeapp-apii.herokuapp.com/emplogin/employeelogininfo";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("successfully Saved your details");
    },(err)=>{
      console.log(err);
      this.toastr.error("Please re-enter your Details");
    })

  }

}
