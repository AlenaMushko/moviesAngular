import {Component, OnInit} from '@angular/core';
import { IGenreItem} from "../../../../interfaces";
import {GenresService} from "../../../../services";

@Component({
    selector: 'app-genres-page',
    templateUrl: './genres-page.component.html',
    styleUrls: ['./genres-page.component.css']
})
export class GenresPageComponent implements OnInit {
    genres: IGenreItem[];

    constructor(private genresService: GenresService) {
    }

    ngOnInit() {
        this.genresService.getAll().subscribe(value => this.genres = value.genres)
    }
}
