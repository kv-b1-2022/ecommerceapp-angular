import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styles: [
  ]
})
export class ListusersComponent implements OnInit {
  userslist!:any;
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.listUsers();
  }
  listUsers(){
    const url = "https://userapp-apii.herokuapp.com/user/listusers";
    this.http.get(url).subscribe((res:any)=>{
      this.userslist = res;
      console.table(res);
    },err=>{
      this.toastr.error("cannot connect to server");
      window.location.reload();
    })
  }
  deleteUser(id:any){
    const url = "https://userapp-apii.herokuapp.com/user/deleteuser/"+id;
    this.http.delete(url).subscribe(res=>{
      this.toastr.success("Deleted successfully");
      this.listUsers();
    },err=>{
      this.toastr.error(err.error.message);
    });
  }
  makeAsAdmin(id:any){
    const url = "https://userapp-apii.herokuapp.com/user/makeasadmin/"+id;
    this.http.get(url).subscribe(res=>{
      this.toastr.success("Updated Successfully");
      this.listUsers();
    },err=>{
      this.toastr.error(err.error.message);
    });
  }
}
