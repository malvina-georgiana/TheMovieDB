import { environment } from './../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  popularMovies;
  movieDetails;
  API_BASE = environment.API_BASE;
  API_KEY = environment.API_KEY;

  constructor( private http: HttpClient) { }

  getPopularMovies(){
    this.popularMovies =  
    this.http.get(`${this.API_BASE}movie/popular?api_key=${this.API_KEY}`);
    return this.popularMovies;
  }
  getMovieDetails(id){
    this.movieDetails =  
    this.http.get(`${this.API_BASE}movie/${id}?api_key=${this.API_KEY}`);
    return this.movieDetails;
  }
  
}
