import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styles: [
  ]
})
export class ApplyCouponComponent implements OnInit {

  coupon!: any;
  constructor(private http: HttpClient, private ts: ToastrService) { }

  ngOnInit(): void {
  }

  couponCheck() {
    const url = "https://couponapp-apii.herokuapp.com/coupon/apply-code?couponCode=" + this.coupon;

    this.http.get(url).subscribe((res: any) => {
      let coupon_discount = res;
      // console.log(res);
      this.ts.success("Coupon applied successfuly");
      localStorage.setItem("coupon_discount", JSON.stringify(coupon_discount));
      let discount = localStorage.getItem("coupon_discount");
      console.log(discount);
    }, (err) => {
      console.log(err.error);
      this.ts.error(err.error.message);
    });

  }

}
