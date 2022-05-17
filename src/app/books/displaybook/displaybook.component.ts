import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-displaybook',
  templateUrl: './displaybook.component.html',
  styles: [
  ]
})
export class DisplaybookComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.displayBook()
   }
   
   display!:any;
   displays!:any;
   value!:any;
   item!:any;
   
   id!:any;
   type:any;
   department:any;
   name:any;
 
 
  
   displayBook()
   {
     const url="https://books-apiii.herokuapp.com/book/display";
     this.http.get(url).subscribe((res: any) => {
         this.value = res;
       }, (err) => {
         alert(err.error.message);
         this.toastr.error(err.error);
       });     
   }
  
    Department()
    {
      this.validation1(this.department);
    }
    validation1(department:String)
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
        },(err)=>
        {
          this.toastr.error(err.error.message);
        });
      }
    }
  
  Name()
  {
    this.validation(this.name);
  }
  validation(name:String)
  {
    event?.preventDefault();
    let count=0;
    if(name==null||name.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
    
      const url="https://books-apiii.herokuapp.com/book/findByName/"+name;
      this.http.get(url).subscribe((res:any)=>
      {

      this.value=res;
	
      },(err)=>
      {
        this.toastr.error(err.error.message);
      });
  }

}

  

}
