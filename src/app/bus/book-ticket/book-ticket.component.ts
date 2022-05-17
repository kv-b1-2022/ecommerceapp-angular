import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styles: [
  ]
})
export class BookTicketComponent implements OnInit {

  bus:any;
  id!:number;

	busId!:number;
	userId!:number;
  dateOfTravelling!:string;
	numberOfTicketsBooked!:number;
	totalAmount!:number;
  status!:string;
  totalTicketPrice!:any;

  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute,private authService:AuthService) {
    this.id=this.route.snapshot.params["id"];
   }
  ngOnInit(): void {
   this.findById();
  }



  findById(){
    // const url="http://localhost:9000/Buses/byId?id="+this.id;
     const url="https://busticketbooking-api.herokuapp.com/Buses/byId?id="+this.id;
  
      this.http.get(url).subscribe((res)=>{
        this.bus = res;

      })
    }
    

  addBooking() {
    const bookingObj={
        
      "busId":this.id, 
      "userId":this.authService.getUser()?.id,
      "dateOfTravelling":this.dateOfTravelling, 
      "numberOfTicketsBooked":this.numberOfTicketsBooked, 
      "totalAmount":this.totalTicketPrice,
      "status":"booked"
   
    };


  const url="https://busticketbooking-api.herokuapp.com/Booking/save";
    this.http.post(url,bookingObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Ticket booked successfully");
    },(err)=>{
      console.log(err);
      this.toastr.error("Booking unsuccessfull");
    })
  }
  getTotalAmount(){
   this.totalTicketPrice=this.numberOfTicketsBooked*this.bus.busTicketPrice;
  }
    
  }

