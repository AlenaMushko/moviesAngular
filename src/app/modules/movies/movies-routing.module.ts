import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviesPageComponent} from "./pages/movies-page/movies-page.component";
import {MovieIdPageComponent} from "./pages/movie-id-page/movie-id-page.component";

const routes: Routes = [{
  path:'', component:MoviesPageComponent, children:[
    {path:'id', component:MovieIdPageComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
