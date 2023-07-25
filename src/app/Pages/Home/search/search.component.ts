import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { MovieAPIService } from 'src/app/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: MovieAPIService, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
  }

  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  onSubmit() {
    console.log(this.searchForm.value, 'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result) => {
      /* TODO: REFACTORING AND CONSOLE.LOG */
      console.log(result, 'searchmovie##');
      this.searchResult = result.results;
      this.searchForm.reset();
    });
  }

}
