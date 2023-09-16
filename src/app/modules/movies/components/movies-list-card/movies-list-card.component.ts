import {Component, Input} from '@angular/core';
import {IFilm} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent {
@Input()
  movie:IFilm;

constructor(private router:Router, private activatedRoute:ActivatedRoute) {
}
  get releaseDate(): string {
    if (this.movie && this.movie.release_date) {
      return this.movie.release_date.slice(0, 4);
    }
    return '';
  }

  toIdPage():void{
    this.router.navigate([this.movie.id], {relativeTo: this.activatedRoute})
  }
}
