import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  id: any;
 movies:any; 

  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute ) { this.id=this.route.snapshot.params["id"];}
  
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(){
    const url="http://localhost:9001/movies/findById/"+this.id;
    this.http.get(url).subscribe(res=>{
      this.movies=res;
    })
  }
  updateMovie(){
    console.log(this.movies);
    const url="http://localhost:9001/movies/update/"+this.id;
    this.http.put(url,this.movies).subscribe(res=>{
      this.toastr.success('updated');
    })
  }

}
