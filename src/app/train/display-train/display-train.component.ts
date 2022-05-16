import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-train',
  templateUrl: './display-train.component.html',
  styles: [
  ]
})
export class DisplayTrainComponent implements OnInit {

  constructor(private http:HttpClient) 
  {
   }

  ngOnInit(): void {
    this.getTrainById();
  }
  trains:any;
  getTrainById()
  {
    const url="http://localhost:9000/train/displayall";
    this.http.get(url).subscribe((res)=>{
      this.trains=res;
    },err=>{
      alert("No Records");
    }
)
  }
  //getStops(train:any){
    //return TrainModule.trainStop.split(","),
































  //}
}
