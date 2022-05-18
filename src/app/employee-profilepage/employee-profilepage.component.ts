import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profilepage',
  templateUrl: './employee-profilepage.component.html',
  styles: [
  ]
})
export class EmployeeProfilepageComponent implements OnInit {

  constructor() { }
  List!:any
  ngOnInit(): void {

    this.List = localStorage.getItem("employee")
    this.List = JSON.parse(this.List)
  }

}
