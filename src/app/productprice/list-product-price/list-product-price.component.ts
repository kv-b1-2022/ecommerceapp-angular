import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-list-product-price',
  templateUrl: './list-product-price.component.html',
  styles: [
  ]
})
export class ListProductPriceComponent implements OnInit {
  productprice!: any;

  constructor(private http:HttpClient , private toastrService: ToastrService) { }

  ngOnInit(): void { 
    this.getAllproductprice();
  }
  getAllproductprice()
  {
    const url="http://localhost:8080/productprice/list";
    this.http.get(url).subscribe((res)=>{
      this.productprice = res;
    },err=>{
    }
    )
  }


}
