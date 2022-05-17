import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-searchbookdept',
  templateUrl: './searchbookdept.component.html',
  styles: [
  ]
})
export class SearchbookdeptComponent implements OnInit {
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  value!:any;
  item!:any;
  none="none";

  department!:String;
  
    Department()
    {
      this.validation(this.department);
    }
    validation(department:String)
    {
      event?.preventDefault();
      let count=0;
      if(department==null||department.trim()=="")
      {
        console.log("invalid");
      }
      else{
        count++;
      }
      if(count==1)
      {
        const url="https://books-apiii.herokuapp.com/book/findByDepartment/"+department;
        this.http.get(url).subscribe((res:any)=>
        {
          this.value=res;
    
        this.none="block";
        },(err)=>
        {
          this.toastr.error(err.error.message);
        });
      }
    }

}
