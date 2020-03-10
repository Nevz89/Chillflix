import { Component, OnInit, Input } from '@angular/core';
import { IMedia } from '../models/media.interface';
import { MediadataService } from '../shared/mediadata.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit { 
  //videos: any;
  video: Observable<any>;
  

  constructor(public service: MediadataService) { }

  ngOnInit(): void {

  this.video  = this.service.getmedia()
  }

}
