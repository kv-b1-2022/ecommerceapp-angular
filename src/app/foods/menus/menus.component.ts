import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['menus.component.css']
})
export class MenusComponent implements OnInit {
search!:any;
food!:any;
  constructor(private config: NgbCarouselConfig) { }

  ngOnInit(): void {
    this.config.interval = 2000;
    this.config.keyboard = true;
    this.config.pauseOnHover = true;
  }
  searchFood(){
    const food= this.search;
    window.location.href="view-foods/"+food;
  }

}
