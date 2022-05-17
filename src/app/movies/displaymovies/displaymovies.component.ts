import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymovies',
  templateUrl: './displaymovies.component.html',
  styleUrls: ['./displaymovies.component.css']
})
export class DisplaymoviesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllMovies();
  }
  searchMovies!:any;
  movies:any;
  getAllMovies()
  {
    //const url="http://localhost:8080/movies/list";
    const url="https://moviesapp-apii.herokuapp.com/movies/list";
    this.http.get(url).subscribe((res)=>{
      this.movies =res;
    },err=>{
      console.log("An error occured");
    }
    )
}
searchMovie(){
  const movie= this.searchMovies;
  window.location.href="search-movies/"+movie;
}
}
