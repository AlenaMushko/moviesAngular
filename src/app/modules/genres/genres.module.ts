import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenresPageComponent } from './pages/genres-page/genres-page.component';
import { GenreIdPageComponent } from './pages/genre-id-page/genre-id-page.component';
import { MoviesIdByGenrePageComponent } from './pages/movies-id-by-genre-page/movies-id-by-genre-page.component';
import {MoviesModule} from "../movies/movies.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { GenresListComponent } from './components/genres-list/genres-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    GenresPageComponent,
    GenreIdPageComponent,
    MoviesIdByGenrePageComponent,
    GenresListComponent,

  ],
    imports: [
        CommonModule,
        GenresRoutingModule,
        MoviesModule,
        MatProgressBarModule,
        MatPaginatorModule
    ]
})
export class GenresModule { }
