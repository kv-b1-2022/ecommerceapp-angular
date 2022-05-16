import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-wallettransactions',
  templateUrl: './wallettransactions.component.html',
  styles: [
  ]
})
export class WallettransactionsComponent implements OnInit {
transactions!:any;
// amount!:any;
 wallet!:any;
balance!:any;
  constructor(private http:HttpClient,private toastr:ToastrService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.verifyUserLogin();
    this.getTransactionDetails();
    this.findWalletBalance();
  }
  verifyUserLogin()
  {
    let mobile=this.authService.getUser()?.mobile;
    const url="http://localhost:9000/wallet/verify/user/login?mobile="+mobile;
    this.http.get(url).subscribe(res=>
      {
        
      },err=>{
        this.router.navigate(["walletsetup"]);
      });

  }
  getTransactionDetails()
  {
     let mobile=this.authService.getUser()?.mobile;
     const url="http://localhost:9000/wallet/user/all/transactions?mobile="+mobile;
     this.http.get(url).subscribe(res=>
       {
         this.transactions=res;
         console.log(res);
       },err=>{
         this.toastr.error("no records found");
       });
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

}
