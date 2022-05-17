import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-leavestatus',
  templateUrl: './leavestatus.component.html',
  styles: [
  ]
})
export class LeavestatusComponent implements OnInit {
  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getAllleave();
  }
  leavestatus:any;
  getAllleave()
  {
    const url="https://employeeapp-apii.herokuapp.com/applyLeave/list";
    this.http.get(url).subscribe((res)=>{
      this.leavestatus = res;
    },err=>{
    }
    )
  }
}














