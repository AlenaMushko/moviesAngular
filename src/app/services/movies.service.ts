import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IFilm, IMovieById, IMovieObj, IPagination} from "../interfaces";
import {api_key, urls} from "../constants";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private httpClient: HttpClient) {
    }

    getAll(page=1): Observable<IPagination<IFilm>> {
        return this.httpClient.get<IPagination<IFilm>>(urls.movies.base + api_key , {params:{page}})
    }

    getById(id: number): Observable<IMovieById> {
        return this.httpClient.get<IMovieById>(urls.movieById.base + `/${id}` + api_key)
    }

    getSoon(page=1): Observable<IPagination<IFilm>> {
        return this.httpClient.get<IPagination<IFilm>>(urls.soon.base + api_key , {params:{page}})
    }

    getSearch(page=1, searchQuery: string): Observable<IMovieObj> {
        return this.httpClient.get<IMovieObj>(urls.search.base + api_key + `&query=${searchQuery}`, {params:{page}})
    }
}
