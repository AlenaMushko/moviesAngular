import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MovieIdPageComponent } from './pages/movie-id-page/movie-id-page.component';


@NgModule({
  declarations: [
    MoviesPageComponent,
    MovieIdPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
