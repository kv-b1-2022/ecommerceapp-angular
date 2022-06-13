import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-redeem-points',
  templateUrl: './redeem-points.component.html',
  styles: [
  ]
})
export class RedeemPointsComponent implements OnInit {
  userPoints!:any;
  points!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
    this.findCalculatePoints();
  }
  findCalculatePoints(){
  let totalAmount=this.route.snapshot.params['amount'];
  console.log(totalAmount);
  let mobile = this.authService.getUser()?.mobile;
  const url="http://localhost:9000/user/validate/points?mobile="+8248565548+"&amount="+1100;
  this.http.get(url).subscribe(res=>{
       this.userPoints=res;
       this.points=this.userPoints.points;
  },err=>{
     
  })
  
  }
}
