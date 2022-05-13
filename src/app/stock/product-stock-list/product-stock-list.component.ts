import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-stock-list',
  templateUrl: './product-stock-list.component.html',
  styles: [
  ]
})
export class ProductStockListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.displayAllStock();
  }
  stocks!:any;
  displayAllStock(){
    //const url="http://localhost:9001/stock/list";
    const url="https://stockapp-apii.herokuapp.com/stock/list";
      this.http.get(url).subscribe((res)=>{
        console.log(res);
        this.stocks = res;
      },err=>{
      }
      )
  }
}
