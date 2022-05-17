import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees-timesheet',
  templateUrl: './list-employees-timesheet.component.html',
  styles: [
  ]
})
export class ListEmployeesTimesheetComponent implements OnInit {
  employeeName: any;
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  employees : any;

  getAllEmployees(){
    const url = "https://employeeapp-apii.herokuapp.com/timesheet/listemployeetimesheet";
    this.http.get(url).subscribe((res)=>{
      this.employees = res;
  },err=>{
    alert(err.error.message);
  }
  )
  }

  search(){
    const name=this.employeeName;
    window.location.href="findemployeetimesheet/"+name;

  }
}
