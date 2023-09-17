import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isDarkTheme = true;
    user: string;
    userName: string;

    constructor(private changeDetector: ChangeDetectorRef) {
        this.refreshUser(false);  // false indicates that we don't want to run change detection here

        const savedTheme = localStorage.getItem('isDarkTheme');
        if (savedTheme !== null) {
            this.isDarkTheme = savedTheme === 'true';
        } else {
            this.isDarkTheme = true;
        }
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
    }

    ngOnInit() {
        this.refreshUser(true);
    }

    refreshUser(runChangeDetection: boolean) {
        this.user = sessionStorage.getItem('userName') as string;
        if (this.user) {
            this.userName = this.user.slice(0, 1);
        }
        if (runChangeDetection) {
            this.changeDetector.detectChanges();
        }
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
        localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
    }

    logOut() {
        sessionStorage.removeItem('userName');
        this.refreshUser(true);
    }
}
