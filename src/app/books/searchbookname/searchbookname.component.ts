import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-searchbookname',
  templateUrl: './searchbookname.component.html',
  styles: [
  ]
})
export class SearchbooknameComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  value!:any;
  item!:any;
  none="none";

  name!:String;
  Name()
  {
    this.validation(this.name);
  }
  validation(name:String)
  {
    event?.preventDefault();
    let count=0;
    if(name==null||name.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
    
      const url="https://books-apiii.herokuapp.com/book/findByName/"+name;
      this.http.get(url).subscribe((res:any)=>
      {

      this.value=res;
		
    this.none="block";
      },(err)=>
      {
        this.toastr.error(err.error.message);
      });
  }

}
}
