import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {GenresService} from "../../../../services";
import {IFilm} from "../../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-genre-id-page',
  templateUrl: './genre-id-page.component.html',
  styleUrls: ['./genre-id-page.component.css']
})
export class GenreIdPageComponent implements OnInit{
  movies:IFilm[];
  length:number;
  pageIndex:number;
  pageSize = 20;
  pageId:string;

  constructor(private location:Location, private genresService:GenresService,
              private router:Router, private activatedRoute:ActivatedRoute) {
  }
  ngOnInit():void {
    this.pageId = location.pathname.split('/')[2]
    this.activatedRoute.queryParams.subscribe(({page})=>{
      this.genresService.getById(page, +this.pageId).subscribe(value => {
        this.pageIndex = value.page;
        this.length = value.total_results < 10000? value.total_results : 10000;
        this.movies = value.results
      })
    })
  }

  handlePageEvent(e: PageEvent) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.router.navigate([], {queryParams:{page:e.pageIndex+1}})
  }

  goBack() {
    this.location.back();
  }
}
