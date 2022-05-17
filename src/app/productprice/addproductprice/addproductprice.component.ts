import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproductprice',
  templateUrl: './addproductprice.component.html',
  styles: [
  ]
})
export class AddproductpriceComponent implements OnInit {
 
    productId!:number;
    price!:number;
    startDate!:Date;
    endDate!:Date;
  


    constructor(private http:HttpClient,private toastr:ToastrService) { }
  
    ngOnInit(): void {
    }
    addProductprice(){
      const PriceObj={"productid":this.productId,"price":this.price,"startDate":this.startDate,"endDate":this.endDate};
      const url="http://localhost:8080/productprice/save";
      this.http.post(url,PriceObj).subscribe((res)=>{
        console.log(res);
        this.toastr.success('successfully price updated');
      },(err)=>{
        console.log(err);
        this.toastr.error('failed to update price');
      })
    }
  }

  