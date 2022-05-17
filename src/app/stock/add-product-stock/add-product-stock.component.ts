import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product-stock',
  templateUrl: './add-product-stock.component.html',
  styles: [
  ]
})
export class AddProductStockComponent implements OnInit {
  
  @Input()
  productId!:any;
  quantity!:any;
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) {
    this.productId=this.route.snapshot.queryParams["productId"];
   }

  ngOnInit(): void {
  }
  addProductStock(){
    const stockObj={"productId":this.productId,"quantity":this.quantity};
    console.log(stockObj)
    //const url="http://localhost:9001/stock/save";
    const url="https://stockapp-apii.herokuapp.com/stock/save";
    this.http.post(url,stockObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success('successfully Stock added');
    },(err)=>{
      console.log(err);
      this.toastr.error('Unsuccessfully Stock added');
    })
  }
}
