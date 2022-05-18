import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-product-stock',
  templateUrl: './view-product-stock.component.html',
  styles: [
  ]
})
export class ViewProductStockComponent implements OnInit {
  id!:any;
  stock!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getStockById();
  }
  getStockById(){
    //const url="http://localhost:9001/stock/"+this.id;
    const url="https://stockapp-apii.herokuapp.com/stock/"+this.id;
    this.http.get(url).subscribe((res)=>{
      console.log(res);
      this.stock=res;
    },err=>{
    }
    )
  }
}
