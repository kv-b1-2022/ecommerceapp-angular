import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  sellersForm = this.fb.group({
    mobileNumber : [''],
    gender : [''],
    categorie : [''],
    branchName : [''],
    address : [''],
    city : [''],
    pincode : ['']

});

submit(){
  console.log(this.sellersForm.get('gender')?.value,this.sellersForm.get('categorie')?.value)
}

}
