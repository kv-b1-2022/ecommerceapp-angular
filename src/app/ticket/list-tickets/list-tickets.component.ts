import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styles: [
  ]
})
export class ListTicketsComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    this.getAllTickets();
  }
  tickets!:any;
getAllTickets()
{
  const url="http://localhost:9000/ticket/listall";
  this.http.get(url).subscribe((res)=>{
    this.tickets = res;
  },err=>{
  }
  )
}

}

