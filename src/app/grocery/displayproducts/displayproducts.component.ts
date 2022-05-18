import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService, private cartService:CartService) { }




  ngOnInit(): void { 
    
    this.getAllProducts();

    let items= localStorage.getItem("CART_ITEMS")
    this.cartItems = items != null ? JSON.parse(items):[];
  }
  products!:any;
  getAllProducts()
  {
    const url="http://localhost:9000/product/productlist";
    this.http.get(url).subscribe((res)=>{
      this.products = res;
    },err=>{
    }
    )
  }

  cartItems:any;
  addToCart(product:any){
    // alert(id);
    this.cartItems.push(product);
    localStorage.setItem("CART_ITEMS", JSON.stringify(this.cartItems));
    this.toastrService.success("Add item to cart");
  }


  }


