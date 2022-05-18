import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-displaydresses',
  templateUrl: './displaydresses.component.html',
  styleUrls: ['./displaydresses.component.css']
})
export class DisplaydressesComponent implements OnInit {
  dressName!:any;
  brandName!:any;
  price!:any;
  dress!:any;
  category!:any;
  dresslist:any;
  constructor(private http:HttpClient,private toastrService:ToastrService ) {}
  ngOnInit(): void {
    this.getAllDresses();
    let items= localStorage.getItem("CART_ITEMS")
    this.cartItems = items != null ? JSON.parse(items):[];
  }
 
  getAllDresses()
  {
    const url="http://localhost:9001/dress/list";
    this.http.get(url).subscribe((res)=>{
      this.dresslist = res;
    },err=>{
    }
    )
  }

cartItems:any;
  addToCart(dresslist:any){
    // alert(id);
    this.cartItems.push(dresslist);
    localStorage.setItem("CART_ITEMS", JSON.stringify(this.cartItems));
    this.toastrService.success("Add item to cart");
  }


  }



  
