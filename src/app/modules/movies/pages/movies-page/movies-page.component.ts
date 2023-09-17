import {Component, OnInit} from '@angular/core';
import {IFilm} from "../../../../interfaces";
import {MoviesService} from "../../../../services";
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {Subject, switchMap, tap} from "rxjs";

@Component({
    selector: 'app-movies-page',
    templateUrl: './movies-page.component.html',
    styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
    movies: IFilm[];
    length: number;
    pageIndex: number;
    pageSize = 20;
    searchMovieValue: string;

    private searchValueSubject = new Subject<string>();

    constructor(
        private moviesService: MoviesService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
    }

    onSearch(searchValue: string) {
        this.router.navigate([], {queryParams: {page: 1}});
        this.searchValueSubject.next(searchValue);
    }

    ngOnInit(): void {
        this.searchValueSubject.pipe(
            tap(searchValue => {
                this.searchMovieValue = searchValue;
            }),
            switchMap(searchValue =>
                this.activatedRoute.queryParams.pipe(
                    switchMap(({page}) => {
                        if (searchValue) {
                            return this.moviesService.getSearch(page, searchValue);
                        } else {
                            return this.moviesService.getAll(page);
                        }
                    })
                )
            ),
            tap(value => {
                if (!value) {
                    throw new Error("No data from server!");
                }
            })
        ).subscribe(
            value => {
                this.pageIndex = value.page - 1;
                this.length = value.total_results < 10000 ? value.total_results : 10000;
                this.movies = value.results;
            },
            error => {
                console.error('Error occurred:', error);
            }
        );

        this.searchValueSubject.next(this.searchMovieValue || '');
    }

    handlePageEvent(e: PageEvent) {
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.router.navigate([], {queryParams: {page: e.pageIndex + 1}});
    }
}
