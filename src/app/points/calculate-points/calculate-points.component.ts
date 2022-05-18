import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calculate-points',
  templateUrl: './calculate-points.component.html',
  styles: [
  ]
})
export class CalculatePointsComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  findCalculatePoints(){
  let totalAmount=this.route.snapshot.params['amount'];
  let mobile=this.route.snapshot.params['mobile'];
  }


}
