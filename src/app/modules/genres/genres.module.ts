import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { GenreIdPageComponent } from './pages/genre-id-page/genre-id-page.component';
import { MoviesIdByGenrePageComponent } from './pages/movies-id-by-genre-page/movies-id-by-genre-page.component';


@NgModule({
  declarations: [
    GenresPageComponent,
    GenreIdPageComponent,
    MoviesIdByGenrePageComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
