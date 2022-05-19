import { Component, OnInit } from '@angular/core';
import{ HttpClient } from'@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
productName!:string;
brandName!:string;
price!:number;
image!:string;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }


  addproduct(){
    const productObj={
      "productName":this.productName,
      "brandName":this.brandName,
      "price":this.price,
      "image":this.image,
    };
    console.log(productObj);
    const url ="http://localhost:9001/Product/save";
    this.http.post(url,productObj).subscribe((res)=>{
      console.log(res);
      alert("successufuly updated");
    },(err)=>{
      console.log(err);
      alert("failed to add product");
    }
    );

  }

}
