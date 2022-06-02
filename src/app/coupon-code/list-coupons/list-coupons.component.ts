import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-coupons',
  templateUrl: './list-coupons.component.html',
  styles: [
  ]
})
export class ListCouponsComponent implements OnInit {

  constructor(private http: HttpClient, private ts: ToastrService) { }

  coupons!:any;
  ngOnInit(): void {
    this.listCoupons();
  }

  listCoupons() {
    const url = "https://couponapp-apii.herokuapp.com/coupon/list-coupons"

    this.http.get(url).subscribe((res) =>{
     console.log(res);
     this.coupons=res;
     this.ts.success("all coupons");
    }
    )
  }
}


