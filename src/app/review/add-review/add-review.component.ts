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
  productId!:any;
  userId!:any;
  ratings!:any;
  review!:any;
    constructor(private http:HttpClient,private toastrService:ToastrService) { 
  
  }
    ngOnInit(): void {
      
    }
    
    addReview(){
      let productId=this.productId;
      let userId=this.userId;
      let ratings=this.ratings;
      let review=this.review;
      console.log(ratings)

      
      const addreviewObj={"productId":productId,"userId":userId,"ratings":ratings,"review":review};
  
      const url="http://localhost:9002/ratings/save";
      this.http.post(url,addreviewObj).subscribe((res)=>{
        console.log(res);
        this.toastrService.success("reviews and ratings were added by user");
      },(err)=>{
        console.log(err);
        this.toastrService.error("user didn't added any ratings");
  
        
      })
   }
  }
  
  