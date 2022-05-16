import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-by-admin',
  templateUrl: './add-by-admin.component.html',
  styles: [
  ]
})
export class AddByAdminComponent implements OnInit {
  // foodName!:string;
  // price!:string;
  // foodType!:number;
  // foodStyle!:string;
  // foodimage!:string;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  // addDish(){
  //   const menuObj={
        
  //     "dishName": this.foodName,
  //     "dishType":this.price,
  //     "price":this.foodType,
  //     "hotelName":this.foodStyle,
  //     "ingredients":this.foodimage,
     
  
  // };
  // const url="http://localhost:9000/MenuInsert/save";
  //     this.http.post(url,menuObj).subscribe((res)=>{
  //       console.log(res);
  //       alert("successfully added Dish");
  //     },(err)=>{
  //       console.log(err);
  //       alert("Unsuccessfully added Dish.......");
  //     })
  // }
  
  
  }




  