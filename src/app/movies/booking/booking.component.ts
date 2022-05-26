import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  ticketsno!:any;
  amount!:any;
  noOftickets!:any;
  id=this.authservice.getUser()?.id;
  constructor(private http:HttpClient,private authservice:AuthService) { }

  ngOnInit(): void {
  }
  

getTicketAmount(){

   this.amount = this.ticketsno * 120;

  }

}

