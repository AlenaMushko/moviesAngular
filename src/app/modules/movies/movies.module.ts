import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatCardModule} from "@angular/material/card";

import {MoviesRoutingModule} from './movies-routing.module';
import {MoviesPageComponent} from './pages/movies-page/movies-page.component';
import {MovieIdPageComponent} from './pages/movie-id-page/movie-id-page.component';
import {
    MoviesListComponent, MoviesListCardComponent, PosterPreviewComponent,
    VideoModalComponent, MovieInfoComponent, MovieDescriptionComponent, GenreBadgeComponent,
    CastMovieListComponent, VideoForMovieComponent, CastMovieItemComponent
} from './components';
import {MatListModule} from "@angular/material/list";
import {ProductionImgComponent} from './components/production-img/production-img.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import {MatPaginatorModule} from "@angular/material/paginator";
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
    declarations: [
        MoviesPageComponent,
        MovieIdPageComponent,
        MoviesListComponent,
        MoviesListCardComponent,
        PosterPreviewComponent,
        VideoForMovieComponent,
        VideoModalComponent,
        MovieInfoComponent,
        MovieDescriptionComponent,
        GenreBadgeComponent,
        CastMovieListComponent,
        CastMovieItemComponent,
        ProductionImgComponent,
        SearchMovieComponent
    ],
    exports: [
        MoviesListComponent,
        MovieInfoComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        MatCardModule,
        MatListModule,
        YouTubePlayerModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressBarModule,
    ]
})
export class MoviesModule {
}
