import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-calculate-points',
  templateUrl: './calculate-points.component.html',
  styles: [
  ]
})
export class CalculatePointsComponent implements OnInit {
  userPoints!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
  }
  findCalculatePoints(){
  let totalAmount=this.route.snapshot.params['amount'];
  let mobile = this.authService.getUser()?.mobile;
  const url="http//localhost:9000/user/points?mobile="+mobile+"&amount="+totalAmount;
  this.http.get(url).subscribe(res=>{
       this.userPoints=res;
  },err=>{
     
  })
  
  }


}
