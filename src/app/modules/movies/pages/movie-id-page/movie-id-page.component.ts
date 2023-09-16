import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-id-page',
  templateUrl: './movie-id-page.component.html',
  styleUrls: ['./movie-id-page.component.css']
})
export class MovieIdPageComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
