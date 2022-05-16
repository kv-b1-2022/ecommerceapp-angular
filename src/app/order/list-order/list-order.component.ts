import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styles: [
  ]
})
export class ListOrderComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllOrders() 
   }
   orders!:any;
   getAllOrders(){
     const url="http://localhost:9000/ordersTable/list";
   
     this.http.get(url).subscribe((res)=>{
      this. orders = res;
    },err=>{
    }
    )
  }
 }

