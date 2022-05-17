import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styles: [
  ]
})
export class ListOrderComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService, private authService:AuthService) { }
  id!:any;
  ngOnInit(): void {
    this.getAllOrders() 
   }
   orders!:any;
   getAllOrders(){
      this.id = this.authService.getUser()?.id;
    //  alert(this.id);
     const url="https://order-apii.herokuapp.com/ordersTable/list";
   
     this.http.get(url).subscribe((res)=>{
      this. orders = res;
    },err=>{
    }
    )
  }
 }

