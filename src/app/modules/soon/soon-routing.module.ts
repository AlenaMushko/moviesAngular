import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SoonPageComponent} from "./pages/soon-page/soon-page.component";
import {SoonIdPageComponent} from "./pages/soon-id-page/soon-id-page.component";

const routes: Routes = [
    {path: '', component: SoonPageComponent},
    {path: ':id', component: SoonIdPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SoonRoutingModule {
}
