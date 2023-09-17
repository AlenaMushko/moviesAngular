import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoonRoutingModule } from './soon-routing.module';
import { SoonPageComponent } from './pages/soon-page/soon-page.component';
import { SoonIdPageComponent } from './pages/soon-id-page/soon-id-page.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MoviesModule} from "../movies/movies.module";
import {MatProgressBarModule} from "@angular/material/progress-bar";


@NgModule({
  declarations: [
    SoonPageComponent,
    SoonIdPageComponent
  ],
    imports: [
        CommonModule,
        SoonRoutingModule,
        MatPaginatorModule,
        MoviesModule,
        MatProgressBarModule
    ]
})
export class SoonModule { }
