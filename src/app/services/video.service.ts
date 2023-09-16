import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IVideoObj} from "../interfaces";
import {api_key, urls} from "../constants";

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    constructor(private httpClient: HttpClient) {
    }

    getVideoByMovie(id: number): Observable<IVideoObj> {
        return this.httpClient.get<IVideoObj>(urls.movieById.base + `/${id}` + urls.videos.base + api_key)
    }

}
