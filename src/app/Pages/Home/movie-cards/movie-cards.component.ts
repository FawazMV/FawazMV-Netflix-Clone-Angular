import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movies';
import { MovieAPIService } from 'src/app/movie-api.service';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent {


  trendingMoviesResults?: Movie[] = [];
  discoverMoviesResults?: Movie[] = [];
  actionMovieResults?: Movie[] = [];
  adventureMovieResults?: Movie[] = [];
  animationMovieResults?: Movie[] = [];
  comedyMovieResults?: Movie[] = [];
  documentaryMovieResults?: Movie[] = [];
  sciencefictionMovieResults?: Movie[] = [];
  thrillerMovieResults?: Movie[] = [];

  constructor(private service: MovieAPIService, private title: Title, private meta: Meta, private router: Router) { }

  ngOnInit(): void {
    this.trendingMovies();
    this.discoverMovies();
    this.actionMovies();
    this.adventureMovies();
    this.comedyMovies();
    this.animationMovies();
    this.documentaryMovies();
    this.sciencefictionMovies();
    this.thrillerMovies();
  }

  trendingMovies() {
    this.service.getTrendingMovies().subscribe((result) => {
      this.trendingMoviesResults = result.results;
    });
  }

  discoverMovies() {
    this.service.getDiscoverMovies().subscribe((result) => {
      this.discoverMoviesResults = result.results;
    });
  }

  actionMovies() {
    this.service.getActionMovies().subscribe((result) => {
      this.actionMovieResults = result.results;
    });
  }

  adventureMovies() {
    this.service.getAdventureMovies().subscribe((result) => {
      this.adventureMovieResults = result.results;
    });
  }

  animationMovies() {
    this.service.getAnimationMovies().subscribe((result) => {
      this.animationMovieResults = result.results;
    });
  }

  comedyMovies() {
    this.service.getComedyMovies().subscribe((result) => {
      this.comedyMovieResults = result.results;
    });
  }

  documentaryMovies() {
    this.service.getDocumentaries().subscribe((result) => {
      this.documentaryMovieResults = result.results;
    });
  }

  sciencefictionMovies() {
    this.service.getScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResults = result.results;
    });
  }

  thrillerMovies() {
    this.service.getThrillerMovies().subscribe((result) => {
      this.thrillerMovieResults = result.results;
    });
  }
}
