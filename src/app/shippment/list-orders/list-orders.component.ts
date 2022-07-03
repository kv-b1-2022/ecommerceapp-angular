import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styles: [
  ]
})
export class ListOrdersComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listdeliveryDetails();
  }
  delivery!:any;
  listdeliveryDetails(){
    //const url="http://localhost:9001/stock/list";
    const url="http://localhost:9000/tracking/GetAllDetails";
      this.http.get(url).subscribe((res)=>{
        console.log(res);
        this.delivery = res;
      },err=>{
      }
      )

}
}
