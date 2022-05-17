import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styles: [
  ]
})
export class DeletebookComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.displayBook()
   }
   
   display!:any;
   displays!:any;
   value!:any;
   item!:any;
   
   id!:any;
   type:any
 
 
  
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
   buybook(id:any)
   {
    const url="https://books-apiii.herokuapp.com/book/deleteById/"+id;
    this.http.get(url).subscribe((res:any)=>
    {

      let value=res.message;
      this.toastr.success(value);
      window.location.reload();
    },(err)=>
    {
        this.toastr.error(err.error.message);
        window.location.reload();
    });

   }
  
}
