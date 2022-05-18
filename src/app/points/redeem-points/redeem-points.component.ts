import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redeem-points',
  templateUrl: './redeem-points.component.html',
  styles: [
  ]
})
export class RedeemPointsComponent implements OnInit {

  
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getpoints();
  }
 points:any;
 getpoints(){
   const url="http://localhost:9000/user/points";
   let totalAmount=this.route.snapshot.params['amount'];
   this.http.get(url).subscribe((res)=>{
     this.points=res;
   },err=>{

   })
 }
}
