import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-employeedetails',
  templateUrl: './get-employeedetails.component.html',
  styleUrls: ['./get-employeedetails.css'
  ]
})
export class GetEmployeedetailsComponent implements OnInit {
  empname!: string;
  empemail!: string;
  mobilenumber!: string;
  role!: string;
  aadhar!: number;
  pannumber!:string;
  accountNo!:number;
  ifsccode !: string;
  bankName!: string;
  status!: string;
  employeeStatus!: string;


  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }
  getempdetails()
  {
    const userObj={
      "empName":this.empname,
    "empEmail":this.empemail,
    "mobileNumber":this.mobilenumber,
    "role":this.role,
    "aadhar":this.aadhar,
    "pannum":this.pannumber,
    "accountNo":this.accountNo,
    "ifscCode":this.ifsccode,
    "bankName":this.bankName,
    "status":"Pending",
    "employeeStatus":"Active"
    };
    const url="http://localhost:9000/details/employeeinfo";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("successfully Saved your details");
    },(err)=>{
      console.log(err);
      this.toastr.error("Please re-enter your Details");
    })
  }

}
