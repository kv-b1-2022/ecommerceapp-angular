import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styles: [
  ]
})
export class ViewTicketsComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params["id"];
   }
id!:any;
  ngOnInit(): void {
    this.getTicket();
  }
  ticketsUser!:any;
  getTicket(){
    const url="http://localhost:9000/tickets/"+this.id;
    this.http.get(url).subscribe((res)=>{
      this.ticketsUser = res;
    },err=>{
    }
    )
  }
  
  }
  
  