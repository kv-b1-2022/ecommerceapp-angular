import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walletsetup',
  templateUrl: './walletsetup.component.html',
  styles: [
  ]
})
export class WalletsetupComponent implements OnInit {
tpin!:any;
  constructor(private http:HttpClient,private toastr:ToastrService,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.verifyUserLogin();
  }
  setTransactionPin()
  {
    let pin=""+this.tpin;
    if(this.tpin<0 || pin.length<4)
    {
      this.toastr.error("please enter a valid tpin");
    }
    else
    {
        let mobile=this.authService.getUser()?.mobile;
        let name=this.authService.getUser()?.name;
        let userDetails={"mobile":mobile,"name":name,"transactionPin":this.tpin}
        const url="https://payment-apii.herokuapp.com/wallet/user/register";
        this.http.post(url,userDetails).subscribe(res=>
          {
              
              this.router.navigate(["addmoneytowallet"]);
          },err=>{
             this.toastr.error(err.error.message);
          });
    }
  }
  verifyUserLogin()
  {
    let mobile=this.authService.getUser()?.mobile;
    const url="https://payment-apii.herokuapp.com/wallet/verify/user/login?mobile="+mobile;
    this.http.get(url).subscribe(res=>
      {
        this.router.navigate(["addmoneytowallet"]);
      },err=>{
         this.toastr.success("welcome "+this.authService.getUser()?.name);
      });

  }

}
