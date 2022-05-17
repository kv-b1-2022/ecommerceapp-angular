import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styles: [
  ]
})
export class DonateComponent implements OnInit {

  donationamount!: string;
  donationcategories!: string;
  
  constructor(private http:HttpClient) {}
   

  ngOnInit(): void {

  }
  donate() {
     const userObj={
      
      "donationamount":this.donationamount,
      "donationcategories":this.donationcategories,

     };
     console.log(userObj);
     const url="https://charityapp-apii.herokuapp.com/donate/save";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       alert("You have donated successfully");
     },(err)=>{
       console.log(err);
       alert("Please donate again");
     })
  }
}