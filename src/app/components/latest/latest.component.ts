import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {
  page = 1;
  showModal: boolean;
  currentMovie: Movie;
  pelisMostrar:Movie[];
  constructor(public MovieService:MovieService) { }
  ngOnInit(){
    this.getByPage()
  }
  showMovieModalDetail(movie: Movie): void {
    this.showModal = true;
    this.currentMovie = movie;
  }  
  closeMovieModalDetail(): void {
    this.showModal = false;
  }
  getMovies(): Movie[] {
    return this.MovieService.getFilms();
  }
  getByPage(): void {
    this.MovieService.getByPage(this.page)
    .subscribe(movies => {
      this.pelisMostrar = movies;
    })
  }
  nextPage() {
    this.page++;
    this.getByPage();
  }
  backPage():void {
      if(this.page > 1){
      this.page--;
      this.getByPage();
      }
    }

}