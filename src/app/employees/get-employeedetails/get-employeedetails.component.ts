import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-employeedetails',
  templateUrl: './get-employeedetails.component.html',
  styles: [
  ]
})
export class GetEmployeedetailsComponent implements OnInit {
  empname!: string;
  empemail!: string;
  mobilenumber!: string;
  role!: string;
  aadhar!: string;
  pannumber!:string;
  ifsccode !: string;
  status!: string;
  joiningdate!: Date;
  leavingdate!: Date;
  joineddate!: Date;

  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }
  getempdetails()
  {
    const userObj={
      "empName":"rama",
    "empEmail":"rama@gmail.com",
    "mobileNumber":"7766231212",
    "role":"watereee",
    "aadhar":"112333121234",
    "pannum":"1134777pow",
    "accountNo":"1334455867823456",
    "ifscCode":"16643338779",
    "status":"pending",
    "joiningdate":"2000-09-08",
    "leavingdate":"2000-07-05",
    "joineddate":"2000-02-04"
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
