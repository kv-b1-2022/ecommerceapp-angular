import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styles: [
  ]
})
export class MyorderComponent implements OnInit {

  constructor(private http:HttpClient,private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getMyOders();
  }
  orders!:any;
  getMyOders(){
    
  }


}
