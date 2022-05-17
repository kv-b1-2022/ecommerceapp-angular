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
   type:any
 
 
  
   displayBook()
   {
     const url="http://localhost:9050/book/display";
     this.http.get(url).subscribe((res: any) => {
         this.value = res;
          console.table(res);
       }, (err) => {
         alert(err.error.message);
         this.toastr.error(err.error);
       });     
   }
  

}
