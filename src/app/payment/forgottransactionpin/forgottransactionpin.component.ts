import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgottransactionpin',
  templateUrl: './forgottransactionpin.component.html',
  styles: [
  ]
})
export class ForgottransactionpinComponent implements OnInit {

  mobile!:any;
  tpin!:any;
  getMobile="block";
  getTpin="none";
  balance!:any;
  wallet!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.findWalletBalance();
  }
  findUser()
  {
    let mobile=""+this.mobile;
     let sessionMobile=localStorage.getItem("sessionMobile");
     
     if(mobile.length!=10)
     {
       this.toastr.error("please enter a valid mobile number");
     }
     else if(this.mobile!=sessionMobile)
     {
       this.toastr.error("no user found");
     }
     else
     {
       this.getMobile="none";
       this.getTpin="block";
     }
    
  }
  updateTransactionPin()
  {
    let pin=""+this.tpin;
    if(pin.length>=4 && this.tpin>0)
    {
      let userMobile=localStorage.getItem("sessionMobile");
      let walletCredentials={"mobile":userMobile,"transactionPin":this.tpin}
      const url="http://localhost:9000/wallet/user/update/tpin";
      this.http.post(url,walletCredentials).subscribe(res=>{
      this.toastr.success("transaction pin updated succsessfully")
      },err=>{
       this.toastr.error(err.error.message);
      });
    }
    else{
      this.toastr.error("please enter a valid pin number");
    }
  }
  findWalletBalance()
  {
  
      let mobile=localStorage.getItem("sessionMobile");
      const url="http://localhost:9000/wallet/user/find/balance?mobile="+mobile;
      this.http.get(url).subscribe(res=>{
      this.wallet=res;
      this.balance=this.wallet.balance;
      },err=>{
      this.toastr.error("can not find wallet balance");
     });
  }



}
