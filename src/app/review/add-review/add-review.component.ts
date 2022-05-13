import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styles: [
  ]
})
export class AddReviewComponent implements OnInit {
  productId!:number;
  userId!:number;
  ratings!:number;
  review!:string;
    constructor(private http:HttpClient,private toastrService:ToastrService) { 
  
  }
    ngOnInit(): void {
      this.addReview();
    }
    
    addReview(){
      const addreviewObj={"productId":this.productId,"userId":this.userId,"ratings":this.ratings,"review":this.review};
  
      const url="http://localhost:9001/ratings/save";
      this.http.post(url,addreviewObj).subscribe((res)=>{
        console.log(res);
        this.toastrService.success("reviews and ratings were addede by user");
      },(err)=>{
        console.log(err);
        this.toastrService.error("user didn't added any ratings");
  
        
      })
   }
  }
  
  