import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styles: [
  ]
})
export class SearchMoviesComponent implements OnInit {
movieName!:any;
category!:any;  
search!:any;
movies!:any;


  constructor(private http:HttpClient,private route:ActivatedRoute, private toastr :ToastrService) { }

  ngOnInit(): void {
    this.search= this.route.snapshot.params['search'];
    this.searchMovie()
  }
  movieDetails!:any;
  searchMovie(){
    const movie= this.search;

    const url="http://localhost:9001/movies/findByMovieName"+this.movieName;
    this.http.get(url).subscribe((res)=>{
      this.movieDetails=res;
      console.log(res); 
   },(err)=>{
     this.toastr.error("Movie is not available");
     
   });
 
 }

}
