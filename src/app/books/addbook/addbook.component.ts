import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styles: [
  ]
})
export class AddbookComponent implements OnInit {

  constructor(private http:HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  name!:String;
  department!:String;
  amount!:String;
  status!:String;
  eBookLink!:String;
  videoLink!:String;
  imageLink!:String;

  nameError!:String


addBook(){
  this.validation(this.name,this.department,this.amount,this.status,this.eBookLink,this.videoLink,this.imageLink)
}
validation( name:String,department:String,amount:String,status:String,eBookLink:String,videoLink:String,imageLink:String){
  
    event?.preventDefault();
    let count=0;
    if(name == null || name.trim()=="")
    {
      this.nameError="invalid Book name"
    }
    else{
      count++;
    }
    if(department == null ||department.trim()=="")
    {
      console.log("invalid DepartMent");
    }
    else{
      count++;
    }
    let number2 =""+amount;
    if( number2 == null || number2.trim()=="")
    {
      console.log("invalid author");
    }
    else{
      count++;
    }
   
    if(eBookLink == null ||eBookLink.trim()=="")
    {
      console.log("invalid eBookLink");
    }
    else{
      count++;
    }
   
    if(imageLink == null ||imageLink.trim()=="")
    {
      console.log("invalid imageLink");
    }
    else{
      count++;
    }
    if(count==5)
    {

      const url="https://books-apiii.herokuapp.com/book/addBook?name="+name+"&department="+department+"&rs="+amount+"&eBookLink="+eBookLink+"&imageLink="+imageLink;
		this.http.get(url).subscribe((res:any)=>{
      let value=res.message;
      this.toaster.success(value);
    },(err)=>
    {
        this.toaster.error(err.error.message);
    });
		}
  }

}
