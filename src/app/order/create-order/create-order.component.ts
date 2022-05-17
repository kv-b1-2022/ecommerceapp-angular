import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styles: [
  ]
})
export class CreateOrderComponent implements OnInit {

  userId!:number;

  amount!:number;
  status!:String;
  createdBy!:number;
  comments!:String;

  constructor(private http:HttpClient,private toastrService: ToastrService,private route:ActivatedRoute,private authService:AuthService
    ) {
    this.amount = this.route.snapshot.queryParams["amount"];
    this.userId=this.authService.getUser()?.id;
   }
      id!:any;
  ngOnInit(): void {
  }

    createOrder(){
    this.id = this.authService.getUser()?.id;

    const orderobj={"userId":this.id,"amount":this.amount,"status":this.status,"createdBy":this.createdBy,"comments":this.comments};
    const url= "https://order-apii.herokuapp.com/ordersTable/save";
    this.http.post(url,orderobj).subscribe((res)=>{
      console.log(res);
      this.toastrService.success('successfully added');
      localStorage.removeItem("CART_ITEMS");
    },(err)=>{
      console.log(err);
      this.toastrService.error('invalid credentails')
    });
 }
  }


  


