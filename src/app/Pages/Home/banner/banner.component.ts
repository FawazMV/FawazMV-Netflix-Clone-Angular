import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/movie-api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerResult?: any = [];

  constructor(private service: MovieAPIService) { }

  ngOnInit(): void {
    this.bannerData();
  }

  bannerData() {
    this.service.sliderMovies().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }
}
