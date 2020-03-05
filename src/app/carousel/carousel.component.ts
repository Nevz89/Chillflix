import { Component, OnInit, Input } from '@angular/core';
import { MediaList } from '../data-feed';
import { IMedia } from '../media.interface';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

@Input() mediaGroup: IMedia [];   

  constructor() { }

  ngOnInit(): void {
  }

}
