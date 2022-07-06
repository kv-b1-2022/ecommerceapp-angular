import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styles: [
  ]
})
export class TrackingComponent implements OnInit {

  constructor(private fb : FormBuilder,private router : Router,private route: ActivatedRoute,private http:HttpClient) { }
listOrders!:any;
  customerId!:any;
  customerName!:string;
  orderId!:any;
  deliveryLocation!:any;
  courierStatus!:string;
  ngOnInit(): void {
   
    }
  submit(){
  //   customerId
  // customerName
  // orderId
  // deliveryLocation
  // courierStatus
  let obj = { 
    customerId:this.customerId,
    customerName:this.customerName,
    orderId:this.orderId,
    deliveryLocation:this.deliveryLocation, 
    courierStatus:this.courierStatus};
    const url="http://localhost:9000/tracking/addRequirment";
    this.http.post(url,obj).subscribe((res)=>{
      console.log(res);
      alert("successfully");
      },
    (err)=>{
      console.log(err);
      alert("Please re-enter your Deta");
    });

  }
  // list(){
  //   // let obj={
  //   //   customerId:this.customerId,
  //   // customerName:this.customerName,
  //   // orderId:this.orderId,
  //   // deliveryLocation:this.deliveryLocation, 
  //   // courierStatus:this.courierStatus};
  //   const url="http://localhost:9000/tracking/GetAllDetails";
  //   this.http.get(url).subscribe((res)=>{
  //     this.listOrders=res;
  //     console.log(res);
  //     },
  //   (err)=>{
  //     console.log(err);
  //     alert("no records found");
  //   });
  //   }
  } 
  

// }


