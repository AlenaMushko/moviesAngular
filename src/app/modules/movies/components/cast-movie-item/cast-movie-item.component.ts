import {Component, Input} from '@angular/core';
import {ICast} from "../../../../interfaces";

@Component({
  selector: 'app-cast-movie-item',
  templateUrl: './cast-movie-item.component.html',
  styleUrls: ['./cast-movie-item.component.css']
})
export class CastMovieItemComponent {
  @Input() cast:ICast;

  get cardSRC(): string {
    return `https://image.tmdb.org/t/p/w500${this.cast.profile_path}`;
  }

  get notPoster(): string {
    return 'https://image.tmdb.org/t/p/w500/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
  }


}
