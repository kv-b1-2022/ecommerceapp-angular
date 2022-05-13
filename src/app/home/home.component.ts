import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    
  ],
  providers: [NgbCarouselConfig]
  
})
export class HomeComponent implements OnInit {
  title = 'ng-carousel-demo';

  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "https://img.freepik.com/free-vector/online-grocery-shopping-super-sale-banner_266159-35.jpg?w=1380"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4a3aa993546277.5e67adbfa5df2.jpg"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/KGF-chapter2.jpg?itok=wpYqmIzZ"}
    
  ];
  

  constructor(config: NgbCarouselConfig) { 
   
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }
  

}
