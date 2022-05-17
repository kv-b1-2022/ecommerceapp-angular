import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-menus',
  templateUrl: './all-menus.component.html',
  styles: [
  ]
})
export class AllMenusComponent implements OnInit {
  foodName!:any;
  price!:any;
  foodType!:any;
  foodStyle!:any;
  value!:any;
  values!:any;
  foodImages!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllMenu();
  }
  getAllMenu(){
    
    const url="http://localhost:9000/MenuList/list";
     fetch(url).then(res=>res.json()).then(res=>{
      this.values=res;
     console.log(this.values);
      });
      this.toastr.success("Keep updating");
  }
 
 }


