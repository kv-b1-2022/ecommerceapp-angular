import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listemployees',
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

  constructor(private hp:HttpClient,) { }
  details!:any
  docTable:any
  count!:any
  messageBox!:any
  chat!:any
  btn='false'
  ngOnInit(): void {
   // const url = "https://employeeapp-apii.herokuapp.com/employees/document/verification"
    const url = "http://localhost:9000/employees/document/verification"

   this.hp.get(url,{responseType:'json'}).subscribe(res=>{
      this.details = res
      console.log(this.details);
   });
  }

  notifiactionClick(){
   
    console.log(this.val);
    
    this.val++
    if(this.val%2==0){
      this.messageBox="block";
    }else{
      this.messageBox="block";
    }
  }
  val = 1
  tableClick(item:string){
    this.docTable = "block"
    this.btn=item
  }

}
