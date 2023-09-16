import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent {
  @Input() url: string;
  @Input() isOpenVideo: boolean;
  @Output() setOpenVideo: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeModal() {
    this.isOpenVideo = false;
    this.setOpenVideo.emit(false);
  }
}
