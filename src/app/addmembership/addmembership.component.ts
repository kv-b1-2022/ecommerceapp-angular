import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addmembership',
  templateUrl: './addmembership.component.html',
  styles: [
  ]
})
export class AddmembershipComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  value!:number;
  userId!:number;
  memberShip()
  {
    this.validation(this.value,this.userId)
  }
  validation(type:number,userId:number)
  {
    let count=0;
    let numbervalid=""+type;
    if(numbervalid==null||numbervalid.trim()=="")
    {
      console.log("invalid type");
    }
    else{
      count++;
    }
    let userIdCheck=""+userId;
    if(userIdCheck==null||userIdCheck.trim()=="")
    {
      console.log("invalid userID");
    }
    else{
      count++;
    }
    if(count==2)
    {
      this.toastr.success("success");
    }
    else{
      this.toastr.error("Check Validation");
    }
  }

}
