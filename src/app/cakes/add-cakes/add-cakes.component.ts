import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { CakesComponent } from '../cakes/cakes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-cakes',
  templateUrl: './add-cakes.component.html',
  styles: [
  ]
})
export class AddCakesComponent implements OnInit {
   id!: String;
   name!: String;
   brand!: String;
   category!: String;
   price!: string;
   image!: String;



  constructor(private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addcakes(){;
    const userObj={"id":this.id,"name":this.name,"brand":this.brand,"category":this.category,"price":this.price,"image":this.image};
    const url="http://localhost:9000/cake/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      this.toastr.success("cake added successfully");
    },(err)=>{
      console.log(err);
      this.toastr.error("please Re-enter the Details");
    })
  }

}
