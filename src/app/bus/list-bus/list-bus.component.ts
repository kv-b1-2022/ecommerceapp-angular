import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-bus',
  templateUrl: './list-bus.component.html',
  styleUrls: ['./list-bus.component.css']
})
export class ListBusComponent implements OnInit {

  constructor(private http:HttpClient, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
     this.getBusById();
  }
  bus:any;
  id!:any;
  getBusById()

  {
    //alert(this.id);
  //  const url="http://localhost:9000/Buses/byId?id="+this.id;
  const url="https://busticketbooking-api.herokuapp.com/Buses/byId?id="+this.id;

    this.http.get(url).subscribe((res)=>{
      this.bus= res;
    },err=>{
     alert("No Records");
    }
    )
}

getStops(bus:any){
  return bus.busStop.split(",");
}

}
