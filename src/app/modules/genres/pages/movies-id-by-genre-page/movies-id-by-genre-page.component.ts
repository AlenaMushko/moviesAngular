import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-movies-id-by-genre-page',
  templateUrl: './movies-id-by-genre-page.component.html',
  styleUrls: ['./movies-id-by-genre-page.component.css']
})
export class MoviesIdByGenrePageComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
