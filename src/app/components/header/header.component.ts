import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDarkTheme = true;
  user:string;

  constructor() {
    this.user = sessionStorage.getItem('userName') as string;

    console.log(this.user)
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      this.isDarkTheme = savedTheme === 'true';
    } else {
      this.isDarkTheme = true;
    }
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }


  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
  }

  logOut(){

  }
}
