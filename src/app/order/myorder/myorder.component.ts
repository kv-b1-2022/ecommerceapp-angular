import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styles: [
  ]
})
export class MyorderComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService, private authService:AuthService) { }
     id!:any;
  ngOnInit(): void {
    this.getMyOders();
  }
  orders!:any;
  getMyOders(){
    this.id = this.authService.getUser()?.id;
     alert(this.id);
     const url="https://order-apii.herokuapp.com/ordersTable/search?userId=4";
   
     this.http.get(url).subscribe((res)=>{
      this. orders = res;
    },err=>{
    }
    )
  }
    
  }



