import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoonRoutingModule } from './soon-routing.module';
import { SoonPageComponent } from './pages/soon-page/soon-page.component';
import { SoonIdPageComponent } from './pages/soon-id-page/soon-id-page.component';


@NgModule({
  declarations: [
    SoonPageComponent,
    SoonIdPageComponent
  ],
  imports: [
    CommonModule,
    SoonRoutingModule
  ]
})
export class SoonModule { }
