import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {LoginFormComponent} from "./components";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class LoginModule { }
