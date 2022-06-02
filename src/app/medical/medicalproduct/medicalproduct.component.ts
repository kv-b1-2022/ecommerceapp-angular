import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-medicalproduct',
  templateUrl: './medicalproduct.component.html',
  styleUrls: ['./medicalproduct.component.scss']
})
export class MedicalproductComponent implements OnInit {

  

    constructor(private http:HttpClient,private toastrService: ToastrService){}

  ngOnInit(): void {

    this.getAllProducts();
  }

  products!:any;

  getAllProducts()
  {

    const url="http://localhost:9001/Product/list"
    this.http.get(url).subscribe((res)=>{
      this.products = res;
    }, err=>{

    }
    )
  }

  deleteProduct(id:any)
  {
    let cfm = confirm("Do you want to delete ?");
    if(cfm){
      const url="http://localhost:9001/Product/delete/" + id;
      this.http.delete(url).subscribe(res=>{
        console.log(res);
        this.toastrService.success('successfully deleted');
        this.getAllProducts();
      },err=>{
       this.toastrService.error('invalid credentails')
      });
    }
  }

}
