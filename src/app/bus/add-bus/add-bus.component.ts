import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  name!:string;
from!:string;
to!:string;
timing!:string;
ticketsAvailable!:number;
ticketPrice!:number;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addBus() {
    const busObj={
        
        "busName": this.name,
        "busFrom": this.from,
        "busTo": this.to,
        "busTiming": this.timing,
        "busTicketsAvailable": this.ticketsAvailable,
        "busTicketPrice": this.ticketPrice
   
    };
  //  const url="http://localhost:9000/Buses/save";
  const url="https://busticketbooking-api.herokuapp.com/Buses/save";

    this.http.post(url,busObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("bus added successfully");
    },(err)=>{
      console.log(err);
      this.toastr.error("Please re-enter bus Details");
    })
  }
}