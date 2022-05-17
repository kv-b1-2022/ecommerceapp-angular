import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {
  empId!:number;
  designation!:string;
  workingDays!:number;
  month!:number;
  salary!:number;
  salaryStatus!:string;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }
  addSalary(){
    const salaryObj={
      "empId":this.empId,
      "designation":this.designation,
      "workingDays":this.workingDays,
      "month":this.month,
      "salary":this.salary,
      "salaryStatus":this.salaryStatus
    };
    const url="http://localhost:9000/salary/save";
    this.http.post(url,salaryObj).subscribe((res:any)=>{
      console.log(res);
        this.toastr.success('successfully added');
    },(err:any)=>{
      console.log(err);
     this.toastr.error('please enter correct details');
    })

  }

}
