import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addproductprice',
  templateUrl: './addproductprice.component.html',
  styles: [
  ]
})
export class AddproductpriceComponent implements OnInit {
 
    productId!:number;
    productname!:string;
    price!:number;
    startDate!:Date;
    EndDate!:Date;
  


    constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) { 
      this.productId=this.route.snapshot.queryParams["productId"];
    }
  
    ngOnInit(): void {
    }
    addProductprice(){
      const PriceObj={"productId":this.productId,"productname":this.productname,"price":this.price,"startDate":this.startDate,"EndDate":this.EndDate};
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

  