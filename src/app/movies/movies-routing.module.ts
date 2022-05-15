import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  {path:'movies',component:MovielistComponent},
  {path:'add-movie',component:AddMoviesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
                      