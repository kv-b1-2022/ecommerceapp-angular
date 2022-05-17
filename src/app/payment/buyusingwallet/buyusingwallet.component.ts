import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buyusingwallet',
  templateUrl: './buyusingwallet.component.html',
  styles: [
  ]
})
export class BuyusingwalletComponent implements OnInit {
tpin!:any;
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  verifyTransactionPin()
  {
    let pin=""+this.tpin;
    if(pin.length<4)
    {
      this.toastr.success("enter a valid pin number");
    }
    else{
      let mobile=localStorage.getItem("sessionMobile");
      let walletCredentials={"transactionPin":this.tpin,"mobile":mobile}
         const url="http://localhost:9000/wallet/tpin/verification";
         this.http.post(url,walletCredentials).subscribe(res=>{
          this.checkWalletBalanceAndUpdate();
         },err=>{
           this.toastr.error(err.error.message);
         })
    }
    
  }
  checkWalletBalanceAndUpdate()
  {
     let totalAmount=this.route.snapshot.params['amount'];
    let orderId=this.route.snapshot.params['orderId'];
    let userId=localStorage.getItem("sessionId");
    let mobile=localStorage.getItem("sessionMobile");
    const url="http://localhost:9000/wallet/user/verify/balance?mobile="+mobile+"&amount="+totalAmount;
    this.http.get(url).subscribe(res=>{
      const url1="http://localhost:9000/wallet/user/balance/updation/subtract?mobile="+mobile+"&amount="+totalAmount;
      this.http.get(url1).subscribe(res1=>{
       this.updateTransaction();  
      },err1=>{
        this.toastr.error(err1.error.message);
      });
    },err=>{
      let transactionDetails={"userId":userId,"orderId":orderId,"totalAmount":totalAmount,"paymentMode":"wallet"}
      const url1="http://localhost:9000/payment/service/failed";
      this.http.post(url1,transactionDetails).subscribe(res1=>{
        this.toastr.error("your products saved successfully in wallet");
    });
      this.toastr.error(err.error.message);
    })
  }

  updateTransaction()
  {
    let totalAmount=this.route.snapshot.params['amount'];
    let orderId=this.route.snapshot.params['orderId'];
    let userId=localStorage.getItem("sessionId");
    //let userId=1;
    let transactionDetails={"userId":userId,"orderId":orderId,"totalAmount":totalAmount,"paymentMode":"wallet"}
    const url="http://localhost:9000/payment/service/success";
    this.http.post(url,transactionDetails).subscribe(res=>{
      this.toastr.success("payment successful");
    },err=>{
      const url1="http://localhost:9000/payment/service/failed";
      this.http.post(url,transactionDetails).subscribe(res=>{
    });
    this.toastr.error(err.error.message);
  });
}

}
