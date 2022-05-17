import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  bus:any;
  id!:number;
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) {
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
  updateBus(){
    console.log(this.bus);
   // const url="http://localhost:9000/Buses/id?id="+this.id;
   const url="https://busticketbooking-api.herokuapp.com/Buses/id?id="+this.id;
    this.http.put(url,this.bus).subscribe((res)=>{
      console.log(res);
      this.toastr.success('Updated Successfully');
     // alert("Dish Updated..");
    },
    (err)=>{
 console.log(err);
    })

}
}
