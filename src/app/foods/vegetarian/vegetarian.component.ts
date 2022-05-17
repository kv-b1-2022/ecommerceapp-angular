import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vegetarian',
  templateUrl: './vegetarian.component.html',
  styles: [
  ]
})
export class VegetarianComponent implements OnInit {
  foodName!:any;
  price!:any;
  foodType  !:any;
  foodStyle!:any;
  foodImages!:any;
  vegetarian!:any;
  
  
  constructor(private http:HttpClient,private route:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.vegFood();
  }
  foodDetails!:any;
  vegFood(){
    // const food= this.vegetarian;
let  type="veg";
    const url="http://localhost:9000/findBycategory?foodType="+type;
    this.http.get(url).subscribe(res=>{
      this.foodDetails=res;
      console.log(res);
      
     
   },err=>{
     this.toastr.error("food is not available");
     
   });
 
 }

}
