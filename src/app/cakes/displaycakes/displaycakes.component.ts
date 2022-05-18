import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-displaycakes',
  templateUrl: './displaycakes.component.html',
  styles: [
  ]
})
export class DisplaycakesComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getAllcakes();

    let items= localStorage.getItem("CART_ITEMS")
    this.cartItems = items != null ? JSON.parse(items):[];
  }
  cakes!:any;
  getAllcakes()
  {
     const url="http://localhost:9000/cakes/list";
    this.http.get(url).subscribe((res)=>{
      this.cakes = res;
    },err=>{
    }
    )
  }

  cartItems:any;
  addToCart(cake:any){
    this.cartItems.push(cake);
    localStorage.setItem("CART_ITEMS", JSON.stringify(this.cartItems));
    this.toastrService.success("Added item to cart");
  }


  }
