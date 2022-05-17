import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
  
  constructor(private http: HttpClient,private toastr: ToastrService) { }
  spinner!:any
  ngOnInit(): void {
    this.listproducts()
  }
  products!:any;
  listproducts(){
    const url = "https://electronis-apii.herokuapp.com/listProduct/products";
    this.http.get(url).subscribe((res: any)=>{
      this.spinner = "none"
      console.log(res);
      this.spinner = "hide";
      this.products=res;
    },(err)=>{
      console.log(err.error.message);
      this.toastr.error(err.error.message);
    })
  }

}
