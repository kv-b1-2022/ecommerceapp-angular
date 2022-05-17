import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { BookingComponent } from './booking/booking.component';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';
import { MovielistComponent } from './movielist/movielist.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

const routes: Routes = [
  {path:'movielist',component:MovielistComponent},
  {path:'movielist/add-movies',component:AddMoviesComponent},
  {path:'displaymovies',component:DisplaymoviesComponent},
  {path:'displaymovies/booking',component:BookingComponent},
  {path:'update-movie/:id',component:UpdateMovieComponent},
  {path:'search-movies/:searchMovies',component:SearchMoviesComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
                      