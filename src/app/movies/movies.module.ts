import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovielistComponent } from './movielist/movielist.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';


@NgModule({
  declarations: [MovielistComponent,AddMoviesComponent,DisplaymoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class MoviesModule { }
