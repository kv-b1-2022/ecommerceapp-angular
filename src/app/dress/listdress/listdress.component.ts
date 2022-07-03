import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-listdress',
  templateUrl:'./listdress.component.html',
  styles: [
  ]
})
export class ListdressComponent implements OnInit {
  toastrService: any;

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllDresslist();

  }
  dresslist:any;
  dress:any;
  getAllDresslist()
  {
    const url="http://localhost:9001/dress/list";
    this.http.get(url).subscribe((res)=>{
      this.dresslist = res;
    },err=>{
    }
    )
  }
}
  
    
