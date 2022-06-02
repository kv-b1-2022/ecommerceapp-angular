import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styles: [
  ]
})
export class UpdateTicketComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTickets();
  }
  ticketsUsers!:any;
  id !:number;
  getTickets(){
    const url="http://localhost:9000/tickets/"+this.id;
    this.http.get(url).subscribe((res)=>{
      this.ticketsUsers = res;
    },err=>{
    }
    )
  }
  
  }
  
  
