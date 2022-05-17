import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styles: [
  ]
})
export class ListReviewComponent implements OnInit {

  constructor(private http:HttpClient ,private toastrService:ToastrService){}
  ngOnInit(): void {
    this.getAllReview();
    this.deleteReview;
    
  }
  reviews!:any;
getAllReview()
{
  const url=" https://ratingsapp-api.herokuapp.com/ratings/list";
  this.http.get(url).subscribe((res)=>{
    this.reviews= res;
  },err=>{
  }
  )
}
deleteReview(id:any){
  let cfm = confirm("Do you want to delete the review ?");
    if(cfm){
  const url=" https://ratingsapp-api.herokuapp.com/ratings/" + id;
  this.http.delete(url).subscribe((res)=>{
    console.log(res);
    this.toastrService.success('successfully deleted');
// alert("Successfully Deleted");
    //refresh
  },err=>{
    this.toastrService.error('invalid credentails');
  }
  )
}
}
}
