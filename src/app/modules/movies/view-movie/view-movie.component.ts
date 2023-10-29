import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/searchResult.interface';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css'],
})
export class ViewMovieComponent implements OnInit {
  id!: any;
  movie!: Movie;
  image!: string;
  backdrop!: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('movieId');
  }
  ngOnInit(): void {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDIzYzBkNTYwMzkzOTY4Zjg0OGY0MzYyMDVlNGMzZSIsInN1YiI6IjYzM2Y5NmFmZDM1ZGVhMDA4MTc5ODA5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XTY8HP9hTlsL8lGitaX5eqgKaKM0GLD_QGalOk4fBCA',
      },
      params: {
        language: 'en-US',
      },
    };
    this.http
      .get<Movie>(`https://api.themoviedb.org/3/movie/${this.id}`, options)
      .subscribe((res) => {
        this.movie = res;
        this.image = `https://image.tmdb.org/t/p/w500${res.poster_path}`;
        this.backdrop = `https://image.tmdb.org/t/p/w500${res.backdrop_path}`;
      });
  }
}
