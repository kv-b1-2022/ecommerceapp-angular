import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-coupon',
  templateUrl: './apply-coupon.component.html',
  styles: [
  ]
})
export class ApplyCouponComponent implements OnInit {

  coupon!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
