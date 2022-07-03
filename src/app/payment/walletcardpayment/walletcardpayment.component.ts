import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walletcardpayment',
  templateUrl: './walletcardpayment.component.html',
  styles: [
  ]
})
export class WalletcardpaymentComponent implements OnInit {

  cardNumber!:any;
 month!:any;
 year!:any;
 name!:any;
 cvv!:any;
 loading="none";
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
   this.verifyUserLogin();
  }
  verifyCardDetails()
  {
     const currDate=new Date();
     const currYear=currDate.getFullYear();
     const currMonth=currDate.getMonth();
     let card=""+this.cardNumber;
     let userCvv=""+this.cvv;
     let validYear=""+this.year;
     if(card.length!=16 )
     {
        this.toastr.error("please enter a valid card number");
     }
     else if(this.name=="" || this.name==null || this.name=="" || this.name==" ")
     {
      this.toastr.error("please enter a valid name");
     }
     else if(this.year<currYear)
     {
      this.toastr.error("can not use expired card");
     }
     else if(this.month<currMonth && this.year==currYear)
     {
      this.toastr.error("can not use expired card");
     }
     else if(this.month<0 || this.month>12)
     {
      this.toastr.error("please enter a valid month");
     }
     
     else if(this.year<0 || validYear.length<4 || this.year>2030)
     {
      this.toastr.error("please enter a valid year");
     }
     else if(userCvv.length<3 || this.cvv<0)
     {
      this.toastr.error("please enter a valid cvv");
     }
     else
     {
        // const queryString = window.location.search;
        //  const urlParams = new URLSearchParams(queryString);
         // const totalAmount = urlParams.get('totalAmount');
        //  let orderId=this.route.snapshot.params['orderId'];
        this.loading="block";
        let totalAmount=this.route.snapshot.params['amount'];
         let mobile=this.authService.getUser()?.mobile;
         let cardDetails={"cardNumber":this.cardNumber,"cvv":this.cvv,"month":this.month,"year":this.year,"amount":totalAmount}; 
         const url="https://payment-apii.herokuapp.com/payment/verifycards";
         this.http.post(url,cardDetails).subscribe(res=>{
            const url1="https://payment-apii.herokuapp.com/wallet/user/balance/updation/add?mobile="+mobile+"&amount="+totalAmount;
            this.http.get(url1).subscribe(res=>{
              this.loading="none";
               this.toastr.success("successfully added to wallet");
               this.router.navigate(["addmoneytowallet"]);
            },err=>{
              this.loading="none";
              this.toastr.error(err.error.message);
              //this.router.navigate(["walletcardpayment/{{totalAmount}}"]);
            });
         },err=>{
          this.loading="none";
           this.toastr.error(err.error.message);
           //this.router.navigate(["walletcardpayment/{{totalAmount}}"]);
         });
     }
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
