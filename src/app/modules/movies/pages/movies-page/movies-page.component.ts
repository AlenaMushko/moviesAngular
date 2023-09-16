import {Component, OnInit} from '@angular/core';
import {IFilm} from "../../../../interfaces";
import {MoviesService} from "../../../../services";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit{
movies:IFilm[];
constructor(private moviesService:MoviesService) {
}
  ngOnInit():void {
  this.moviesService.getAll(1).subscribe(value => this.movies = value.results)
  }
}
