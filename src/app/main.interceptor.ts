import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserService} from "./services/user.service";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        let accessToken: string | null = null;
        this.userService.user$.subscribe(value => accessToken = value);

        if (accessToken) {
            request = this._addToken(request, accessToken);
        }
        return next.handle(request);
    }

    _addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
        return request.clone({
            setHeaders: {Authorization: `Bearer ${token}`}
        })
    }
}
