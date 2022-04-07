import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  type: any = "";
  id: any = "";
  url: any = "";
  movies: any;
  movie: any;
  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  ngOnInit(): void {
    this.type = this._route.snapshot.params['type'];
    this.id = this._route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }
  getMovie() {
    this._http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex((movie: { id: any; }) => movie.id == this.id);
      if(index > -1){
        this.movie = this.movies[index];
      }
    });
  }

}
