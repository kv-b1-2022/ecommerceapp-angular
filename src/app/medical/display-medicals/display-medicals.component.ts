import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-display-medicals',
  templateUrl: './display-medicals.component.html',
  styleUrls: ['./display-medicals.component.scss']
})
export class DisplayMedicalsComponent implements OnInit {
  products!:any;
  product!:any;
  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void { 
    
    this.getAllProducts();

    let items= localStorage.getItem("CART_ITEMS")
    this.cartItems = items != null ? JSON.parse(items):[];
  }
  
  getAllProducts()
  {
    const url="http://localhost:9001/Product/list";
    this.http.get(url).subscribe((res)=>{
      this.products = res;
      console.log(this.products);
    },err=>{
    });
  }

  cartItems:any;
  addToCart(product:any){
    // alert(id);
    this.cartItems.push(product);
    localStorage.setItem("CART_ITEMS", JSON.stringify(this.cartItems));
    this.toastrService.success("Add item to cart");
  }
}
