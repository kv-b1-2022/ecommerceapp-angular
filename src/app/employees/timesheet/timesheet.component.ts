import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styles: [
  ]
})
export class TimesheetComponent implements OnInit {
  working!:string;
  leaving!:string;
  task!:string;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  timesheet(){
    const userObj = {
      "Working":this.working,
      "Leaving":this.leaving,
      "Task":this.task
    };
    const url="http://localhost:9000/user/register";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      alert("successfully Recorded");
    },(err)=>{
      console.log(err);
      alert("Please re-enter your Details");
    })


  }

}
