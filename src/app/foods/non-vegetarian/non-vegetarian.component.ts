import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-non-vegetarian',
  templateUrl: './non-vegetarian.component.html',
  styles: [
  ]
})
export class NonVegetarianComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
