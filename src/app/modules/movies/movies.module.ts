import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { MoviesRoutingModule } from './movies-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewMovieComponent } from './view-movie/view-movie.component';

@NgModule({
  declarations: [MovieComponent, SearchComponent, ViewMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class MoviesModule {}
