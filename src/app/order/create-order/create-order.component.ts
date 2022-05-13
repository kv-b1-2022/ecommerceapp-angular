import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styles: [
  ]
})
export class CreateOrderComponent implements OnInit {

  userId=16;
  amount!:number;
  status!:String;
  createdBy!:number;
  comments!:String;

  constructor(private http:HttpClient,private toastrService: ToastrService,private route:ActivatedRoute) {
    this.amount = this.route.snapshot.queryParams["amount"];
   }

  ngOnInit(): void {
  }

  // createOrder(){
  //   const url= "https://order-apii.herokuapp.com/ordersTable/save";
  //   const userId=16;
  //   const orderobj = {
  //     "userId":userId,
     
  //     "status":"ordered",
     
  //     "createdBy": userId,
  //     "comments":"Good products"
  // };

  createOrder(){
    const orderobj={"userId":this.userId,"amount":this.amount,"status":this.status,"createdBy":this.createdBy,"comments":this.comments};
    const url= "https://order-apii.herokuapp.com/ordersTable/save";
    this.http.post(url,orderobj).subscribe((res)=>{
      console.log(res);
      this.toastrService.success('successfully added');
    },(err)=>{
      console.log(err);
      this.toastrService.error('invalid credentails')
    });
 }
  }


  


