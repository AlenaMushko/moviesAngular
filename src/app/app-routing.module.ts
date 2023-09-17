import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
    {
        path: '', component:MainLayoutComponent, children: [
            {path: '', redirectTo: 'movie', pathMatch: 'full'},
            {path:'movie', loadChildren:()=> import('./modules/movies/movies.module').then(m=>m.MoviesModule)},
            {path:'genre', loadChildren:()=> import('./modules/genres/genres.module').then(m=>m.GenresModule)},
            {path:'soon', loadChildren:()=> import('./modules/soon/soon.module').then(m=>m.SoonModule)},
            {path:'register', loadChildren:()=> import('./modules/register/register.module').then(m=>m.RegisterModule)},
            {path:'login', loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)},
            { path: '**', redirectTo: 'movie' }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
