import {Component, Input, OnInit} from '@angular/core';
import {IFilm, IGenre} from "../../../../interfaces";
import {GenresService} from "../../../../services";

function extractGenres(genreIds: number[], allGenres: { id: number, name: string }[]): string {
    const selectedGenreNames = allGenres
        .filter(genre => genreIds.includes(genre.id))
        .map(genre => genre.name);

    const displayGenres = selectedGenreNames.length > 2
        ? selectedGenreNames.slice(0, 3)
        : selectedGenreNames;

    return displayGenres.join(', ');
}

@Component({
    selector: 'app-genre-badge',
    templateUrl: './genre-badge.component.html',
    styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {
    @Input()
    movie: IFilm;
    genres: IGenre;

    constructor(private genresService: GenresService) {
    }

    ngOnInit(): void {
        this.genresService.getAll().subscribe(value => this.genres = value)
    }

    get filmGenres(): string {
        return extractGenres(this.movie?.genre_ids, this.genres?.genres || []);
    }

}
