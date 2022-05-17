import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styles: [
  ]
})
export class StartersComponent implements OnInit {
starts!:any;
foodName!:any;
  price!:any;
  foodType  !:any;
  foodStyle!:any;
  foodImages!:any;
  statrs!:any;
  star!:any;
  constructor(private http:HttpClient ,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.starter();
  }
  starter(){
    // const food= this.vegetarian;
    let type="starters";
    const url="http://localhost:9000/findBycategory?foodType="+type;
    this.http.get(url).subscribe(res=>{
      this.starts=res;
      console.log(res);
      
     
   },err=>{
     this.toastr.error("food is not available");
     
   });
 
  }
}
