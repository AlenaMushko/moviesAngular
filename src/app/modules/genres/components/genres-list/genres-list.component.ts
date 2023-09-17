import {Component, Input} from '@angular/core';
import {IGenreItem} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})

export class GenresListComponent {
  @Input()
  genres:IGenreItem[];

constructor(private router:Router, private activatedRoute:ActivatedRoute) {
}

  toIdPage(genreId:number):void {
    this.router.navigate([genreId], {relativeTo:this.activatedRoute})
  }
}
