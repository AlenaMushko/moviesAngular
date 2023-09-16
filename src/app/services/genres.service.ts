import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre, IMovieObj} from "../interfaces";
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

    getById(page: number, id: number): Observable<IMovieObj> {
        return this.httpClient.get<IMovieObj>(urls.movies.base + api_key + `&with_genres=${id}&page=${page}`)
    }
}
