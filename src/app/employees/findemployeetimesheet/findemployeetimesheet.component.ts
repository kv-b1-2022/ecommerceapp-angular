import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-findemployeetimesheet',
  templateUrl: './findemployeetimesheet.component.html',
  styles: [
  ]
})
export class FindemployeetimesheetComponent implements OnInit {
  
  name: any;
  employees!: any;

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    this.getEmployee();
  }
  getEmployee(){
    const url="https://employeeapp-apii.herokuapp.com/timesheet/"+this.name;
    this.http.get(url).subscribe((res)=>{
      this.employees=res;
    },(err)=>{
      console.log(err);
      alert("Please re-enter your Details");
     })


  }
  // getTotal(){
  //   const url="http://localhost:9000/timeheet/getworkinghours";
  //   this.http.get(url).subscribe((res)=>{
  //     this.employees=res;
  //   },(err)=>{
  //     console.log(err);
  //     alert("Please re-enter your Details");
  //    })
  // }

}
