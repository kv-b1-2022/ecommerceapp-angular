import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styles: [
  ]
})
export class CreateOrderComponent implements OnInit {

  amount!:number;
  constructor(private route:ActivatedRoute) {
    this.amount = this.route.snapshot.queryParams["amount"];
   }

  ngOnInit(): void {
  }

}
