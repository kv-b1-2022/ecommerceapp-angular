import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyusingwallet',
  templateUrl: './buyusingwallet.component.html',
  styles: [
  ]
})
export class BuyusingwalletComponent implements OnInit {
tpin!:any;
loading="none";
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.verifyUserLogin();
  }
  verifyTransactionPin()
  {
    this.loading="block";
    let pin=""+this.tpin;
    if(pin.length<4)
    {
      this.loading="none";
      this.toastr.success("enter a valid pin number");
    }
    else{
      
      let mobile = this.authService.getUser()?.mobile;
      let walletCredentials={"transactionPin":this.tpin,"mobile":mobile}
         const url="https://payment-apii.herokuapp.com/wallet/tpin/verification";
         this.http.post(url,walletCredentials).subscribe(res=>{
          
          this.checkWalletBalanceAndUpdate();
         },err=>{
          this.loading="none";
           this.toastr.error(err.error.message);
         })
    }
    
  }
  checkWalletBalanceAndUpdate()
  {
     let totalAmount=this.route.snapshot.params['amount'];
    let orderId=this.route.snapshot.params['orderId'];
   let userId=this.authService.getUser()?.id;
   let mobile=this.authService.getUser()?.mobile;
    const url="https://payment-apii.herokuapp.com/wallet/user/verify/balance?mobile="+mobile+"&amount="+totalAmount;
    this.http.get(url).subscribe(res=>{
      const url1="https://payment-apii.herokuapp.com/wallet/user/balance/updation/subtract?mobile="+mobile+"&amount="+totalAmount;
      this.http.get(url1).subscribe(res1=>{
       this.updateTransaction();  
      },err1=>{
        this.loading="none";
        this.toastr.error(err1.error.message);
      });
    },err=>{
      let transactionDetails={"userId":userId,"orderId":orderId,"totalAmount":totalAmount,"paymentMode":"wallet"}
      const url1="https://payment-apii.herokuapp.com/payment/service/failed";
      this.http.post(url1,transactionDetails).subscribe(res1=>{
       // this.toastr.error("your products saved successfully in wallet");
       this.loading="none";
    });
    this.loading="none";
      this.toastr.error(err.error.message);
    })
  }

  updateTransaction()
  {
    let totalAmount=this.route.snapshot.params['amount'];
    let orderId=this.route.snapshot.params['orderId'];
    let userId=this.authService.getUser()?.id;
    //let userId=1;
    let transactionDetails={"userId":userId,"orderId":orderId,"totalAmount":totalAmount,"paymentMode":"wallet"}
    const url="https://payment-apii.herokuapp.com/payment/service/success";
    this.http.post(url,transactionDetails).subscribe(res=>{
      this.loading="none";
      this.toastr.success("payment successful");
      this.router.navigate(["addmoneytowallet"]);
    },err=>{
      const url1="https://payment-apii.herokuapp.com/payment/service/failed";
      this.http.post(url,transactionDetails).subscribe(res=>{
        this.loading="none";
    });
    this.loading="none";
    this.toastr.error(err.error.message);
  });
}
verifyUserLogin()
  {
    let mobile=this.authService.getUser()?.mobile;
    const url="https://payment-apii.herokuapp.com/wallet/verify/user/login?mobile="+mobile;
    this.http.get(url).subscribe(res=>
      {
       // this.toastr.success("welcome"+this.authService.getUser()?.name);
      },err=>{
        this.router.navigate(["walletsetup"]);
      });


  }

}
