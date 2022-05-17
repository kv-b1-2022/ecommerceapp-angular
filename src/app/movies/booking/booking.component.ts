import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  ticketsno!:any;
  amount!:any;
  noOftickets!:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  

getTicketAmount(){

   this.amount = this.ticketsno * 120;

  }

}

