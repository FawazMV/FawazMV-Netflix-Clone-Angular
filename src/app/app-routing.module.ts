import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { Error404Component } from './Pages/Layout/error404/error404.component';
import { SingleMovieComponent } from './Pages/SingleMovie/single-movie/single-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:id', component: SingleMovieComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
