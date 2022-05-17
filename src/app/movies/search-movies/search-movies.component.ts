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
searchMovies!:any;
search!:any;
movies!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute, private toastr :ToastrService) { }

  ngOnInit(): void {
    this.searchMovies= this.route.snapshot.params['search'];
    this.searchMovie()
  }
  searchMovie(){
    const movie= this.searchMovies;

    const url="http://localhost:9001/movies/findByMovieName";
    this.http.get(url).subscribe((res)=>{
      this.movies=res;
      console.log(res); 
   },(err)=>{
     this.toastr.error("movies is not available");
     
   });
 
 }

}
