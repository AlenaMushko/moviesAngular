import {Component, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {IFilm} from "../../../../interfaces";
import {MoviesService} from "../../../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-soon-page',
  templateUrl: './soon-page.component.html',
  styleUrls: ['./soon-page.component.css']
})
export class SoonPageComponent implements OnInit{
  movies: IFilm[];
  length: number;
  pageIndex: number;
  pageSize = 20;

  constructor(private moviesService:MoviesService, private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(({page})=>{
      this.moviesService.getSoon(page).subscribe(value => {
        this.movies = value.results;
        this.pageIndex = value.page - 1;
        this.length = value.total_results < 10000 ? value.total_results : 10000;
      })
    })
  }

  handlePageEvent(e: PageEvent) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.router.navigate([], {queryParams:{page:e.pageIndex+1}})
  }
}
