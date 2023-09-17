import { Component } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-soon-id-page',
  templateUrl: './soon-id-page.component.html',
  styleUrls: ['./soon-id-page.component.css']
})
export class SoonIdPageComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
