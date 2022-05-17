import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  id!:any;
   user!:any;
   constructor(private http:HttpClient, private route:ActivatedRoute) {
    this.id = this.route.snapshot.params["id"]; 
    }
  
  ngOnInit(): void {
    this.getUserById();
  }
  
   getUserById(){
   // const url="http://localhost:9000/list?id="+this.id;
   const url="https://busticketbooking-api.herokuapp.com/list?id="+this.id;
    this.http.get(url).subscribe((res)=>{
      this.user= res;
    },err=>{
      
    }
    )
}
}
