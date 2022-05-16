import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    let user = localStorage.getItem('LOGGED_IN_USER');
    if(user != null){
      return true;
    }
    return false;
  }
  logout(){
    localStorage.removeItem('LOGGED_IN_USER');
    this.toastr.info("Logged out successfully");
    window.location.href="login";
  }
  getUser(){
    let user = localStorage.getItem('LOGGED_IN_USER');
    if(user != null){
      return JSON.parse(user);
    }
    return null;
  }
}
