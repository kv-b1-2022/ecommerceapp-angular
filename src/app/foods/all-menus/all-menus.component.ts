import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-menus',
  templateUrl: './all-menus.component.html',
  styles: [
  ]
})
export class AllMenusComponent implements OnInit {
  foodName!:any;
  price!:any;
  foodType  !:any;
  foodStyle!:any;
  foodImages!:any;
  search!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private toastr:ToastrService) { }

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


