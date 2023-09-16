import {Component, Input, OnInit} from '@angular/core';
import {VideoService} from "../../../../services";
import {IVideo} from "../../../../interfaces";

@Component({
  selector: 'app-video-for-movie',
  templateUrl: './video-for-movie.component.html',
  styleUrls: ['./video-for-movie.component.css']
})
export class VideoForMovieComponent implements OnInit{
@Input()
id:string;
video:IVideo;
isOpenVideo: boolean = false;


constructor(private videoService:VideoService) {
}
ngOnInit() {
  this.videoService.getVideoByMovie(+this.id).subscribe(value => this.video = value.results[0])
}

  openVideo() {
    this.isOpenVideo = true;
  }

}
