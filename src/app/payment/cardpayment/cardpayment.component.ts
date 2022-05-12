import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cardpayment',
  templateUrl: './cardpayment.component.html',
  styles: [
  ]
})
export class CardpaymentComponent implements OnInit {
 cardNumber!:any;
 month!:any;
 year!:any;
 name!:any;
 cvv!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  verifyCard()
 {

 }

}
