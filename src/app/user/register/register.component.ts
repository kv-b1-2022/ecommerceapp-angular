import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm!:FormGroup;
  nonWhitespaceRegExp: RegExp = new RegExp("\\S");
  constructor(private formBuilder:FormBuilder, private toastr:ToastrService,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*'), Validators.pattern(this.nonWhitespaceRegExp)]),
      mail:new FormControl('',[Validators.required,Validators.email]),
      mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(8)])
    });
}
  get name(){
    return this.myForm.get('name');
  }
  get mail(){
    return this.myForm.get('mail');
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
    // const userObj = {
    //   "name": this.name?.value,
    //   "mail":this.mail?.value,
    //   "mobile":this.mobile?.value,
    //   "password":this.password?.value,
    // };
    // let usersJson = localStorage.getItem('USERS');
    // let users = usersJson != null ? JSON.parse(usersJson) : [];
    // // let users = [];
    // users.push(userObj);
    // localStorage.setItem('USERS', JSON.stringify(users));  
    // this.toastr.success("Register Successful");
    const user = {
      "name": this.name?.value,
      "mail":this.mail?.value,
      "mobile":this.mobile?.value,
      "password":this.password?.value,
    };
    const url = "https://userapp-apii.herokuapp.com/user/register";
    this.http.post(url,user).subscribe((res:any)=>{
      let output = res;
      console.log(res);
      this.toastr.success("Registered Successfully");
      this.router.navigate(["login"]);
    },(err)=>{
      console.log(err.error);
      this.toastr.error(err.error.message);
     // window.location.reload();
    });

  }
}
