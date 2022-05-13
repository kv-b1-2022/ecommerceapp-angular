import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  myForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastr:ToastrService,private http:HttpClient) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
  }
  get email(){
    return this.myForm.get('email');
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
    let usersJson = localStorage.getItem('USERS');
    let users = usersJson != null ? JSON.parse(usersJson) : [];

    let user = users.find( (u:any) => u.email == this.email?.value && u.password == this.password?.value);
    console.log(user);
    if(user != null){
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
      this.toastr.success("Login Successful");
    }else {
      this.toastr.error("Invalid Login Credentials");
    }
  }
}
