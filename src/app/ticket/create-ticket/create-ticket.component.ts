import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styles: [
  ]
})
export class CreateTicketComponent implements OnInit {

  userId!: number;
  ticketTitle!: string;
  description!: string;
  category !: string;
  empDetails !: any

  constructor(private http: HttpClient, private toastrService: ToastrService,private authService:AuthService) { 
    this.userId=this.authService.getUser()?.id;
  }

  ngOnInit(): void {
    const url2 = "https://employeeapp-apii.herokuapp.com/employeeinformation/listemployee";

    this.http.get(url2).subscribe((res) => {
      // console.log(res);
      // this.toastrService.success('Ticket Created Successfully');
      this.empDetails = res
    }, (err) => {
      console.log(err);
      this.toastrService.error('Ticket Creation Failed');
    })
  }
  createTicket() {
    const userObj = { "userId": this.userId, "ticketTitle": this.ticketTitle, "description": this.description, "category": this.category };
    console.log(userObj);
    const url = "https://supportticket-apii.herokuapp.com/ticket/save";
    this.http.post(url, userObj).subscribe((res) => {
      console.log(res);
      this.toastrService.success('Ticket Created Successfully');

    }, (err) => {
      console.log(err);
      this.toastrService.error('Ticket Creation Failed');
    });


  }

}


