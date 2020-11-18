import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies:any;
  movieId;
  constructor( private service: MoviesService, private route: ActivatedRoute) {
    service.getPopularMovies()
      .subscribe((response) => {
        this.movies = response.results;
      });
      
  }

  ngOnInit(): void {
  }

}
