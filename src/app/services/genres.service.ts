import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFilm, IGenre,  IPagination} from "../interfaces";
import {api_key, urls} from "../constants";

@Injectable({
    providedIn: 'root'
})
export class GenresService {
    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<IGenre> {
        return this.httpClient.get<IGenre>(urls.genres.base + api_key)
    }

    getById(page = 1, id: number): Observable<IPagination<IFilm>> {
        return this.httpClient.get<IPagination<IFilm>>(urls.movies.base + api_key + `&with_genres=${id}`, {params: {page}})
    }

}
