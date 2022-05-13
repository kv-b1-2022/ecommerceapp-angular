import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-foods',
  templateUrl: './view-foods.component.html',
  styles: [
  ]
})
export class ViewFoodsComponent implements OnInit {
  foodName!:any;
  price!:any;
  foodType  !:any;
  foodStyle!:any;
  foodImages!:any;
  search!:any;
  constructor(private http:HttpClient,private toastr:ToastrService ,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.search= this.route.snapshot.params['search'];
    this.searchFood()
  }
  foodDetails!:any;
  searchFood(){
    const food= this.search;

    const url="http://localhost:1234/DishesByLetter/food_name?food_name="+this.search;
    this.http.get(url,{responseType:'json'}).subscribe((res)=>{
      this.foodDetails=res;
      console.log(res);
      
     
   },(err)=>{
     this.toastr.error("food is not available");
     
   });
 
 }
 }



