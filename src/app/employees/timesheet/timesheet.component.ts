import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styles: [
  ]
})
export class TimesheetComponent implements OnInit {
  employeeId!:string;
  employeeName!:string;
  working!:string;
  leaving!:string;
  task!:string;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  timesheet(){
    const userObj = {
      "employeeId":this.employeeId,
      "employeeName":this.employeeName,
      "workingHours":this.working,
      "leavingHours":this.leaving,
      "task":this.task
    };
    const url="https://employeeapp-apii.herokuapp.com/timesheet/register";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(userObj);
      console.log(res);
     // alert("successfully Recorded");
      this.toastr.success("Successfully Recorded");
    },(err)=>{
      console.log(err);
      //alert("Please re-enter your Details");
      this.toastr.error("Unsuccess Recorded ");
    })


  }

}
