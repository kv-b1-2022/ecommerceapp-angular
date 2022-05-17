import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-non-vegetarian',
  templateUrl: './non-vegetarian.component.html',
  styles: [
  ]
})
export class NonVegetarianComponent implements OnInit {
  foodName!:any;
  price!:any;
  foodType  !:any;
  foodStyle!:any;
  foodImages!:any;
  nonvegs!:any;
  nonveg!:any;
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.nonvegetarian();

  }
  nonvegetarian(){
    // const food= this.vegetarian;
    let type="non veg";
    const url="http://localhost:9000/findBycategory?foodType="+type;
    this.http.get(url).subscribe(res=>{
      this.nonvegs=res;
      console.log(res);
      
     
   },err=>{
     this.toastr.error("food is not available");
     
   });
 
  }
}
