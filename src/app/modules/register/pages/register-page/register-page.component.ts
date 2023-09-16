import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterFormComponent} from "../../components";

@Component({
    selector: 'app-register-page',
    template: '',
})

export class RegisterPageComponent {
    constructor(private matDialog: MatDialog) {
        this.matDialog.open(RegisterFormComponent, {
            disableClose: true,
            enterAnimationDuration: '2s',
            exitAnimationDuration: '0.5s',
            hasBackdrop: false,
            position: {
                left: '10%',
            }
        })
    }
}

