import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product-stock',
  templateUrl: './add-product-stock.component.html',
  styles: [
  ]
})
export class AddProductStockComponent implements OnInit {
  productId!:number;
  quantity!:number;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addProductStock(){
    const stockObj={"productId":this.productId,"quantity":this.quantity};
    const url="http://localhost:9001/stock/save";
    this.http.post(url,stockObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success('successfully Stock added');
    },(err)=>{
      console.log(err);
      this.toastr.success('successfully Stock added');
    })
  }
}