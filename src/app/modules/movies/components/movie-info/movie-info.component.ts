import {Component, OnInit} from '@angular/core';
import { IMovieById} from "../../../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../../../services";

@Component({
    selector: 'app-movie-info',
    templateUrl: './movie-info.component.html',
    styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
    movie:IMovieById;
    idMovie:string;

    constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {
    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(({movieId, id}) => {
            if(movieId){
                this.moviesService.getById(movieId).subscribe(value => this.movie = value);
                this.idMovie = movieId;
            } else {
                this.moviesService.getById(id).subscribe(value => this.movie = value);
                this.idMovie = id;
            }

        })

    }
}
