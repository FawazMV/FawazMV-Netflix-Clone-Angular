import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home/home.component';
import { SingleMovieComponent } from './Pages/SingleMovie/single-movie/single-movie.component';
import { NavbarComponent } from './Pages/Layout/navbar/navbar.component';
import { ButtonComponent } from './Pages/Layout/button/button.component';
import { Error404Component } from './Pages/Layout/error404/error404.component';
import { BannerComponent } from './Pages/Home/banner/banner.component';
import {HttpClientModule} from '@angular/common/http'
import { MovieCardsComponent } from './Pages/Home/movie-cards/movie-cards.component';
import { SearchComponent } from './Pages/Home/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleMovieComponent,
    NavbarComponent,
    ButtonComponent,
    Error404Component,
    BannerComponent,
    MovieCardsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
