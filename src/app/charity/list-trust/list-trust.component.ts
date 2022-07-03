import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-trust',
  templateUrl: './list-trust.component.html',
  styleUrls: []
})
export class ListTrustComponent implements OnInit {
  trusts!:any;
  constructor(private http:HttpClient) {}

  ngOnInit(): void {

    this.getAllTrust();
  }


  getAllTrust()
  {
    const url="https://charityapp-apii.herokuapp.com/trust/list";

    this.http.get(url).subscribe((res)=>{
      console.log(res);
      this.trusts = res;

    },err=>{

    }
    )
  }
}
