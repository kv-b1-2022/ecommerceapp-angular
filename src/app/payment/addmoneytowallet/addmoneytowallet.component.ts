import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

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

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.findWalletBalance();
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
     let mobile=localStorage.getItem("sessionMobile");
    // let mobile = this.authService.getUser()?.mobile;
    const url="http://localhost:9000/wallet/user/find/balance?mobile="+mobile;
    this.http.get(url).subscribe(res=>{
     this.wallet=res;
     this.balance=this.wallet.balance;
    },err=>{
     this.toastr.error("can not find wallet balance");
    });
  }

}
