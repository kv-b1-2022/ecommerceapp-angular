import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styles: [
  ]
})
export class EmployeedetailsComponent implements OnInit {

  constructor() { }
  details!:any
  ngOnInit(): void {
   const url = "https://employeeapp-apii.herokuapp.com/employeeinformation/listemployee"
    fetch(url).then(res=>res.json()).then(res=>{
      this.details = res
      console.log(this.details);
     
    });
    // this.details = JSON.parse(this.details)
  }

}
