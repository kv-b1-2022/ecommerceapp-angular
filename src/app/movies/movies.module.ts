import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovielistComponent } from './movielist/movielist.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';
import { BookingComponent } from './booking/booking.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';




@NgModule({
  declarations: [MovielistComponent,AddMoviesComponent,DisplaymoviesComponent, SearchMoviesComponent,BookingComponent,UpdateMovieComponent],

  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class MoviesModule { }
