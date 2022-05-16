import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatemedicals',
  templateUrl: './updatemedicals.component.html',
  styleUrls: ['./updatemedicals.component.scss']
})
export class UpdatemedicalsComponent implements OnInit {
   
  med!:any;
  id!:any;
  name!:any;
  image!:any;
  brand!:any;
  price!:any;


  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) { 
    this.id=this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.findById();
  }
findById(){
  const url="http://localhost:9001/Product/"+this.id;
    this.http.get(url).subscribe((res)=>{
      this.med = res;
      console.log(res);
})
}
updateMedical(){

  console.log(this.med);

  const url="http://localhost:9001/Product/update/"+this.id;
    this.http.put(url,this.med).subscribe((res)=>{
      this.toastr.success('medicine Updated Successfully....');
   
})
}
}
