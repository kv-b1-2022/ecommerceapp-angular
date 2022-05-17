import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-leavelist',
  templateUrl: './leavelist.component.html',
  styleUrls: []
})
export class LeavelistComponent implements OnInit {
  empId!:any;
  leavelist!:any;
  constructor(private http:HttpClient,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.getAllleave();
  }
  // leavelist:any;
  getAllleave()
  {
  const userObj ={
    "empId": this.empId
    };
    const url="https://employeeapp-apii.herokuapp.com/applyLeave/list";
    this.http.get(url).subscribe((res)=>{
      this.leavelist = res;
    },err=>{
    }
    )
  }
  acceptLeave(id:number)
  {
    const url="https://employeeapp-apii.herokuapp.com/applyleave/accept?id="+id;
    this.http.get(url).subscribe(res=>{
      this.toastr.success("Approved successfully")
    },err=>{
      this.toastr.error("err.error.message");
    });
  }
  rejectLeave(id:number)
  {
    const url="https://employeeapp-apii.herokuapp.com/applyleave/reject?id="+id;
    this.http.get(url).subscribe(res=>{
      this.toastr.success("Rejected successfully")
    },err=>{
      this.toastr.error("err.error.message");
    });
  }
}