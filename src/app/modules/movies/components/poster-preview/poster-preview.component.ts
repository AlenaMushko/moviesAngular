import {Component, Input} from '@angular/core';
import {IFilm} from "../../../../interfaces";

@Component({
  selector: 'app-poster-preview',
  templateUrl: './poster-preview.component.html',
  styleUrls: ['./poster-preview.component.css']
})
export class PosterPreviewComponent {
  @Input()
  movie:IFilm;

  get cardSRC(): string {
    return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
  }

  get notPoster(): string {
    return 'https://image.tmdb.org/t/p/w500/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg';
  }

  maxStars = 10;

  get popularity(): number {
    const popularityValue =this.movie?.popularity ? Math.round(this.movie.vote_average) : 0;
    return popularityValue;
  }

  get filledStars(): number {
    const filledStarsValue = this.popularity;
    return filledStarsValue;
  }

  get emptyStars(): number {
    const emptyStarsValue = this.maxStars - this.filledStars;
    return emptyStarsValue
  }
}
