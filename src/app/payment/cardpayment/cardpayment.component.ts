import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-cardpayment',
  templateUrl: './cardpayment.component.html',
  styles: [
  ]
})
export class CardpaymentComponent implements OnInit {
 cardNumber!:any;
 month!:any;
 year!:any;
 name!:any;
 cvv!:any;
 money=this.route.snapshot.params['amount'];
 loading="none";
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute,private authService:AuthService) { }
 

  ngOnInit(): void {
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
        this.loading="block";
        const queryString = window.location.search;
         const urlParams = new URLSearchParams(queryString);
         let totalAmount=this.route.snapshot.params['amount'];
         let orderId=this.route.snapshot.params['orderId'];
         let userId=this.authService.getUser()?.id;
         let transactionDetails={"userId":userId,"orderId":orderId,"totalAmount":totalAmount,"paymentMode":"card"}
         let cardDetails={"cardNumber":this.cardNumber,"cvv":this.cvv,"month":this.month,"year":this.year,"amount":totalAmount}; 
         const url="https://payment-apii.herokuapp.com/payment/verifycards";
         this.http.post(url,cardDetails).subscribe(res=>{
            const url1="https://payment-apii.herokuapp.com/payment/service/success";
            this.http.post(url1,transactionDetails).subscribe(res=>{
               this.loading="none";
               this.toastr.success("Payment successfull");
            },err1=>{
               this.loading="none";
              this.toastr.error(err1.error.message);
            });
         },err=>{
            
               const url12="https://payment-apii.herokuapp.com/payment/service/failed";
               this.http.post(url,transactionDetails).subscribe(res=>{
                  this.loading="none";
               },err2=>{
                  this.loading="none";
               this.toastr.error(err2.error.message);
               });
               this.loading="none";
           this.toastr.error(err.error.message);
         });
     }
 }

}
