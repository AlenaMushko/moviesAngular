import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenresPageComponent} from "./pages/genres-page/genres-page.component";
import {GenreIdPageComponent} from "./pages/genre-id-page/genre-id-page.component";
import {MoviesIdByGenrePageComponent} from "./pages/movies-id-by-genre-page/movies-id-by-genre-page.component";

const routes: Routes = [
    {path: '', component: GenresPageComponent},
    {path: ':id', component: GenreIdPageComponent},
    {path: ':id/:movieId', component: MoviesIdByGenrePageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenresRoutingModule {
}
