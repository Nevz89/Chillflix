import { Component, OnInit, Input } from '@angular/core';
import { IMedia } from '../models/media.interface';
import { MediadataService } from '../shared/mediadata.service';
import { Observable } from 'rxjs';
import { PreviewService } from '../shared/preview.service'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit { 
  //videos: any;
  videos$: Observable<any>;

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor(public service: MediadataService, public previewService: PreviewService) { }

  ngOnInit(): void {
    //this.service.getPopularVideos().subscribe(value =>  this.videos = value) //console.log(value));

    //subscribe/unsubscribe met de async pipe in template
    this.videos$ = this.service.getPopularVideos()
  }

selectVideo(videoItem: IMedia) {
  console.log(videoItem);
  this.previewService.setVideoPreview(videoItem)
}




}
