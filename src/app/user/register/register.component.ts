import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private toastr:ToastrService,private http:HttpClient) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.nullValidator,Validators.pattern('[a-zA-Z ]*')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(8)])
    });
}
  get name(){
    return this.myForm.get('name');
  }
  get email(){
    return this.myForm.get('email');
  }
  get mobile(){
    return this.myForm.get('mobile');
  }
  get password(){
    return this.myForm.get('password');
  }
  isValid(fieldName:any){
    const field = this.myForm.get(fieldName);
    let clazz = '';
    if(field?.touched){
      if(field?.errors){
        return clazz = 'is-invalid';
      }
      else{
        clazz = 'is-valid';
      }
    }
    return clazz;
  }
  register(){
    const userObj = {
      "name": this.name?.value,
      "email":this.email?.value,
      "mobile":this.mobile?.value,
      "password":this.password?.value,
      "role":"user"
    };
    let usersJson = localStorage.getItem('USERS');
    let users = usersJson != null ? JSON.parse(usersJson) : [];
    // let users = [];
    users.push(userObj);
    localStorage.setItem('USERS', JSON.stringify(users));  
    this.toastr.success("Register Successful");

  }
}
