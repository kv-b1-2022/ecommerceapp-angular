import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styles: [
  ]
})
export class CreateTicketComponent implements OnInit {

  userId!:number;
  ticketTitle!:string;
  description!:string;
  category !: string;

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  createTicket(){
    const userObj={"userId":this.userId,"ticketTitle":this.ticketTitle,"description":this.description,"category":this.category};
    console.log(userObj);
    const url="http://localhost:9000/ticket/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastrService.success('Ticket Created Successfully');
      
    },(err)=>{
      console.log(err);
      this.toastrService.error('Ticket Creation Failed');
    })
  }
  
  }

  
