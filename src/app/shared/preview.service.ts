import { Injectable } from '@angular/core';
import { IMedia } from '../models/media.interface';

@Injectable({
  providedIn: 'root'
})

export class PreviewService {
  video: IMedia

  setVideoPreview(videoItem: IMedia){
    this.video=videoItem;
  }

  getVideoPreview(){
    return this.video
  }

  constructor() { }
}
