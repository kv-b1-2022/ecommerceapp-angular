import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styles: [
  ]
})
export class TransactiondetailsComponent implements OnInit {
  cardnumber: any;
  constructor(private http:HttpClient) { }

  
  
    ngOnInit(): void {
      
    }
    users: any;
    UserDetails() {
            const userObj = {
        "cardNumber": this.cardnumber
      };
      
      const url = "https://payment-apii.herokuapp.com/transaction/details";
      this.http.post(url,userObj,{responseType:"json"}).subscribe((res)=>{
        this.users=res;
        console.log(res);
      },err=>{
        alert("no data found");
      })
    }

}
