import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toast, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-buses-admin',
  templateUrl: './list-buses-admin.component.html',
  styles: [
  ]
})
export class ListBusesAdminComponent implements OnInit {

  buses!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllBuses();
  }
  
  getAllBuses()
  {
   // const url="http://localhost:9000/Buses/list";
    const url="https://busticketbooking-api.herokuapp.com/Buses/list";
    this.http.get(url).subscribe((res)=>{
      this.buses = res;  
    },err=>{
    }
    )
  }
  deleteBus(id:any){
    let clarify = confirm("Do you want to delete");
    if(clarify){
    const url="https://busticketbooking-api.herokuapp.com/Buses/" + id;
      this.http.delete(url).subscribe((res)=>{
        console.log(res);
        this.toastr.success('successfully deleted');
       // alert("Successfully Deleted");
        //refresh
        this.getAllBuses();
      },err=>{
        this.toastr.error('invalid deletion')
      }
      )
    }
  }
}
