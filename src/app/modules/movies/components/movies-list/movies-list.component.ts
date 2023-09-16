import {Component, Input} from '@angular/core';
import {IFilm,} from "../../../../interfaces";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
@Input()
  movies:IFilm[]
}
