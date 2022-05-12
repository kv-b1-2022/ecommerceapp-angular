import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.css']
})
export class AddSalaryComponent implements OnInit {
  salaryId!:number;
  designation!:string;
  salary!:number;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addSalary(){
    const salaryObj={
      "salaryId":this.salaryId,
      "designation":this.designation,
      "salary":this.salary
    };
    const url="http://localhost:8080/totalSalary/save";
    this.http.post(url,salaryObj).subscribe((res:any)=>{
      console.log(res);
     
        this.toastr.success('successfully added');
      
      
    },(err:any)=>{
      console.log(err);
     this.toastr.error('please re-enter your details');
    })

  }

}
