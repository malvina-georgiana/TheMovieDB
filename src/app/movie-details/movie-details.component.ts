import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  movieDetails:any;
  movieId: any;

  constructor( private service: MoviesService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id');
    this.service.getMovieDetails(this.movieId).subscribe((response) => {
      this.movieDetails = response;
    })
  }

}
