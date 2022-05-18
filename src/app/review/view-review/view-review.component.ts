import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styles: [
  ]
})
export class ViewReviewComponent implements OnInit {
  id!:any;
  getView!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getViewReview();
  }
  getViewReview(){
   
    const url=" https://ratingsapp-api.herokuapp.com/ratings/"+this.id;
    this.http.get(url).subscribe((res)=>{
      console.log(res);
      this.getView=res;
    },err=>{
      console.log(err);
    }
    )
  }
}
  