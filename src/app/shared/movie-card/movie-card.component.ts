import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from 'src/app/interface/searchResult.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  image!: string;

  constructor(private route: Router) {}

  ngOnInit() {
    this.image = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  watchNow(movie: Movie) {
    const { original_title, id } = movie;
    this.route.navigate([original_title, id]);
  }
  defaultImage() {
    this.image =
      'https://images.unsplash.com/photo-1621955964441-c173e01c135b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80';
  }
}
