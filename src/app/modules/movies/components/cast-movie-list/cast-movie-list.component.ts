import {Component, Input, OnInit} from '@angular/core';
import {CastsService} from "../../../../services";
import {ICast} from "../../../../interfaces";

@Component({
  selector: 'app-cast-movie-list',
  templateUrl: './cast-movie-list.component.html',
  styleUrls: ['./cast-movie-list.component.css']
})
export class CastMovieListComponent implements OnInit{
@Input() id:string;
casts:ICast[];

constructor(private castsService:CastsService) {
}

ngOnInit() {
  this.castsService.getCastsByMovie(+this.id).subscribe(value => this.casts = value.cast.slice(0, 6))
}
}
