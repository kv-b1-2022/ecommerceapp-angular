import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-walletsetup',
  templateUrl: './walletsetup.component.html',
  styles: [
  ]
})
export class WalletsetupComponent implements OnInit {
tpin!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
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
        let mobile=localStorage.getItem("sessionMobile");
        let name="hari";
        let userDetails={"mobile":mobile,"name":name,"transactionPin":this.tpin}
        const url="http://localhost:9000/wallet/user/register";
        this.http.post(url,userDetails).subscribe(res=>
          {
              this.toastr.success("wallet created successfully");
          },err=>{
             this.toastr.error(err.error.message);
          });
    }
  }

}
