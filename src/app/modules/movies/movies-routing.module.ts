import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'search', component: SearchComponent },
  { path: ':movieTitle/:movieId', component: ViewMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
