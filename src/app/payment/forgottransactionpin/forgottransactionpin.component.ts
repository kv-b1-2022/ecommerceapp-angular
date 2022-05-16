import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

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
  constructor(private http:HttpClient,private toastr:ToastrService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.verifyUserLogin();
    this.findWalletBalance();
  }
  findUser()
  {
    let mobile=""+this.mobile;
    let  sessionMobile=this.authService.getUser()?.mobile;
     
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
      let userMobile = this.authService.getUser()?.mobile;
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
  
    let mobile = this.authService.getUser()?.mobile;
      const url="http://localhost:9000/wallet/user/find/balance?mobile="+mobile;
      this.http.get(url).subscribe(res=>{
      this.wallet=res;
      this.balance=this.wallet.balance;
      },err=>{
      this.toastr.error("can not find wallet balance");
     });
  }
  verifyUserLogin()
  {
    let mobile=this.authService.getUser()?.mobile;
    const url="http://localhost:9000/wallet/verify/user/login?mobile="+mobile;
    this.http.get(url).subscribe(res=>
      {
        this.toastr.success("welcome"+this.authService.getUser()?.name);
      },err=>{
        this.router.navigate(["walletsetup"]);
      });


  }



}
