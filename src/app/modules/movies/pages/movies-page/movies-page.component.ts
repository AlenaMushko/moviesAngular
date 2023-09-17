import {Component, OnInit} from '@angular/core';
import {IFilm} from "../../../../interfaces";
import {MoviesService} from "../../../../services";
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit{
movies:IFilm[];
  length:number;
  pageIndex:number;
  pageSize = 20;

constructor(private moviesService:MoviesService, private router:Router, private activatedRoute:ActivatedRoute) {
}
  ngOnInit():void {
  this.activatedRoute.queryParams.subscribe(({page})=>{
    this.moviesService.getAll(page).subscribe(value => {
      console.log(value)
      this.pageIndex = value.page;
      this.length = value.total_results < 10000? value.total_results : 10000;
      this.movies = value.results
  })
  })
  }

  handlePageEvent(e: PageEvent) {
this.router.navigate([], {queryParams:{page:e.pageIndex+1}})
  }
}
