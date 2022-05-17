import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';
import { MovielistComponent } from './movielist/movielist.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

const routes: Routes = [
  {path:'movielist',component:MovielistComponent},
  {path:'add-movie',component:AddMoviesComponent},
  {path:'displaymovies',component:DisplaymoviesComponent},
  {path:'search-movies/:searhMovies',component:SearchMoviesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
                      