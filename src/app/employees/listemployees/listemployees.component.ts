import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  constructor(private hp: HttpClient,private ts : ToastrService) { }
  details!: any
  result!: any
  docTable: any
  count!: any
  messageBox!: any
  chat!: any
  btn = 'false'
  idB = false
  spinner=false
  ngOnInit(): void {

    if (this.details == undefined) {
      // const url = "https://employeeapp-apii.herokuapp.com/employees/document/verification"
      const url = "https://employeeapp-apii.herokuapp.com/employees/document/verification"
      // const url = "https://employeeapp-apii.herokuapp.com/employeeinformation/listemployee"
      this.hp.get(url, { responseType: 'json' }).subscribe(res => {
        this.details = res
        console.log(this.details);
      });
    }
    this.validate()
  }

  notifiactionClick() {

    this.val++
    if (this.val % 2 == 0) {
      this.messageBox = "block";
    } else {
      this.messageBox = "none";
    }
  }
  val = 1
  tableClick(item: string) {
    this.docTable = "block"
    this.btn = item
    this.spinner = true
  }
  validate() {
    const url = "https://employeeapp-apii.herokuapp.com/employees/document/verificationlist"
    this.hp.get(url, { responseType: 'json' }).subscribe(res => {
      this.result = res
    });
    console.log(this.result);
    const url2 = "https://employeeapp-apii.herokuapp.com/employees/document/verification"
    // const url = "https://employeeapp-apii.herokuapp.com/employeeinformation/listemployee"
    this.hp.get(url2, { responseType: 'json' }).subscribe(res => {
      this.details = res
      
    });
  }
  analysis(){
    this.idB =true
  }
  verified(){
    const url = "https://employeeapp-apii.herokuapp.com/employees/document/verificationUpdateall"
    this.hp.get(url, { responseType: 'json' }).subscribe(res => {
      this.result = res
      this.ts.success("successfull update")
    },err=>{
      this.ts.error("some details not update")
    });
  }
}
