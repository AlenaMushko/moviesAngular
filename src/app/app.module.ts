import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {YouTubePlayerModule} from "@angular/youtube-player";

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './components/app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './components/header/header.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MainInterceptor} from "./main.interceptor";

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        YouTubePlayerModule,
        MatDialogModule,

        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: MainInterceptor
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
