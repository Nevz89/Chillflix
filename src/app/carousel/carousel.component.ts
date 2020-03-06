import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../data/data-feed';
import { IMedia } from '../models/media.interface';
import { MediadataService } from '../shared/mediadata.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit { 

  constructor(public s: MediadataService) { }

  ngOnInit(): void {
  }

}
