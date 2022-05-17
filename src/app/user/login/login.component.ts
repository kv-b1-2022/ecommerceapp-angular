import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [

   
  ]
})
export class LoginComponent implements OnInit {

  myForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastr:ToastrService,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      mail:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    });
  }
  get mail(){
    return this.myForm.get('mail');
  }
  get password(){
    return this.myForm.get('password');
  }
  isValid(fieldName:any){
    const field = this.myForm.get(fieldName);
    let clazz = '';
    if(field?.touched){
      if(field?.errors){
        clazz = 'is-invalid';
      }
      else{
        clazz = 'is-valid';
      }
    }
    return clazz;
  }
  logIn(){
    // let usersJson = localStorage.getItem('USERS');
    // let users = usersJson != null ? JSON.parse(usersJson) : [];

    // let user = users.find( (u:any) => u.email == this.mail?.value && u.password == this.password?.value);
    // console.log(user);
    // if(user != null){
    //   localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
    //   this.toastr.success("Login Successful");
    // }else {
    //   this.toastr.error("Invalid Login Credentials");
      const user = {
        "mail":this.mail?.value,
        "password":this.password?.value
      };
      const url = "https://userapp-apii.herokuapp.com/user/login";
      this.http.post(url,user).subscribe((res:any)=>{
        let output = res;
        console.log(res);
        this.toastr.success("Logged in Successful");
        localStorage.setItem('LOGGED_IN_USER',JSON.stringify(output));
        this.router.navigate(["home"]);
      },(err)=>{
        console.log(err.error);
        this.toastr.error(err.error.message);
      });
    }
  }

