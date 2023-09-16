import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginFormComponent} from "../../components";

@Component({
  selector: 'app-login-page',
  template: '',
})

export class LoginPageComponent {

  constructor(private matDialog:MatDialog) {
    this.matDialog.open(LoginFormComponent, {
      disableClose:true,
      enterAnimationDuration:'2s',
      exitAnimationDuration:'0.5s',
      hasBackdrop:false,
      position:{
        left:'10%',
      }
    })
  }
}
