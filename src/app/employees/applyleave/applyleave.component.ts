import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: []
})
export class ApplyleaveComponent implements OnInit {
  empId!: string;
  empName!: string;
  leaveFromDate!: any;
  leaveToDate!: any;
  reason!: any;
  constructor(private http:HttpClient,private toastr:ToastrService) {}
  ngOnInit(): void {
  }
  applyingleave() {
     const userObj={
        "empId":this.empId,
        "empName":this.empName,
        "leaveFromDate": this.leaveFromDate,
        "leaveToDate":this.leaveToDate,
        "reason":this.reason,
     };
     const url="https://employeeapp-apii.herokuapp.com/applyleave/insert";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       this.toastr.success("Successfully Applyed");
       //--*window.location.href="http://localhost:4200/leavelist"
     },(err)=>{
       console.log(err);
       this.toastr.error("Please re-enter your Details");
     })
  }
}