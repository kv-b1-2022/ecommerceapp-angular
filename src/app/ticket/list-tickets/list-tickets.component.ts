import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styles: [
  ]
})
export class ListTicketsComponent implements OnInit {
  empDetails !: any;
  assignedTo !: string;
  status !: string;
  priority !: string;

  constructor(private http:HttpClient,private route:ActivatedRoute,private toastrService: ToastrService) { 
    
  
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
    this.getAllTickets();
  }
  tickets!:any;
getAllTickets()
{
  const url="https://supportticket-apii.herokuapp.com/ticket/listall";
  this.http.get(url).subscribe((res)=>{
    this.tickets = res;
  },err=>{
  }
  )
}

}

