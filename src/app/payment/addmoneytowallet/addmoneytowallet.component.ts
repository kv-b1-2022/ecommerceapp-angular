import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmoneytowallet',
  templateUrl: './addmoneytowallet.component.html',
  styles: [
  ]
})
export class AddmoneytowalletComponent implements OnInit {
 amount!:any;
 wallet!:any;
balance!:any;
loading="block";


  constructor(private http:HttpClient,private toastr:ToastrService,private authService:AuthService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.verifyUserLogin();
    this.findWalletBalance();
    // this.loading="true";
  }
  addMoney()
  {
    if(this.amount<0)
    {
        this.toastr.error("please enter a valid amount");
    }
    else{
         this.toastr.success("success");
    }
  }
  findWalletBalance()
  {
     
     let mobile = this.authService.getUser()?.mobile;
     const url="https://payment-apii.herokuapp.com/wallet/user/find/balance?mobile="+mobile;
     this.http.get(url).subscribe(res=>{
      this.loading="none";
     this.wallet=res;
     this.balance=this.wallet.balance;
    },err=>{
     this.toastr.error("can not find wallet balance");
    });
  }
  verifyUserLogin()
  {
    let mobile=this.authService.getUser()?.mobile;
    const url="https://payment-apii.herokuapp.com/wallet/verify/user/login?mobile="+mobile;
    this.http.get(url).subscribe(res=>
      {
        //this.spinner=false;
       // this.toastr.success("welcome  "+this.authService.getUser()?.name);
      },err=>{
        this.router.navigate(["walletsetup"]);
      });

  }

}
