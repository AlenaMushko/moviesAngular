import {Component, Input} from '@angular/core';
import {IMovieById, IProductionCompanies} from "../../../../interfaces";

@Component({
    selector: 'app-movie-description',
    templateUrl: './movie-description.component.html',
    styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent {
    @Input()
    movie: IMovieById;

    constructor() {
    }

    get movieGenres():string{
        return this.movie.genres.map(genre => genre.name).join(', ');
    }

    get releaseDate():string{
        return this.formatDateToMonthYear(this.movie.release_date);
    };

    get productionArr():IProductionCompanies[] {
      return   this.movie.production_companies?.map(item => ({
            logo_path: item.logo_path,
            name: item.name,
            id: item.id,
        }))
    }

    formatDateToMonthYear(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth();

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[month];
        const formattedDate = `${monthName} ${year}`;

        return formattedDate;
    };

}
