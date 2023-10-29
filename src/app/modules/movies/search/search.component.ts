import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  debounce,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { Movie, SearchResult } from 'src/app/interface/searchResult.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText!: string;
  movies!: Movie[];
  results!:SearchResult;
  constructor(private http: HttpClient) {}

  searchMovies(searchMovie: string) {
    const options = {
      method: 'GET',
      params: {
        include_adult: false,
        language: 'en-US',
        page: 1,
        query: searchMovie,
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDIzYzBkNTYwMzkzOTY4Zjg0OGY0MzYyMDVlNGMzZSIsInN1YiI6IjYzM2Y5NmFmZDM1ZGVhMDA4MTc5ODA5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XTY8HP9hTlsL8lGitaX5eqgKaKM0GLD_QGalOk4fBCA',
      },
    };

    this.http
      .get<SearchResult>('https://api.themoviedb.org/3/search/movie', options)
      .subscribe((res) => {
        this.results = res
        this.movies = res.results;
      });
  }
}
