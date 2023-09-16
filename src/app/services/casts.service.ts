import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {api_key, urls} from "../constants";
import {ICastObj} from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class CastsService {
    constructor(private httpClient: HttpClient) {
    }

    getCastsByMovie(id: number): Observable<ICastObj> {
        return this.httpClient.get<ICastObj>(urls.movieById.base + `/${id}` + urls.cast.base + api_key)
    }
}
