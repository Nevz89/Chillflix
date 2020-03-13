import { Component, OnInit, Input} from '@angular/core';
import { PreviewService } from '../shared/preview.service'
import { IMedia } from '../models/media.interface';

@Component({
  template: '<youtube-player videoId="dQw4w9WgXcQ"></youtube-player>',
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})

export class PreviewComponent implements OnInit {
  

  constructor(public previewService: PreviewService) { }


  
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
