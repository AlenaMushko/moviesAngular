import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isDarkTheme = true;
    userName: string | null = null;

    constructor(private changeDetector: ChangeDetectorRef, private userService:UserService) {
        const savedTheme = localStorage.getItem('isDarkTheme');
        if (savedTheme !== null) {
            this.isDarkTheme = savedTheme === 'true';
        } else {
            this.isDarkTheme = true;
        }
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
    }

    ngOnInit() {
        this.userService.user$.subscribe(value => {
            this.userName = value ? value.slice(0,1) : null;
            this.changeDetector.markForCheck();
        })
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
        localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
    }

    logOut() {
        this.userService.removeUser();
    }
}
