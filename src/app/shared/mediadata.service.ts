import { Injectable } from '@angular/core';
import { IMedia } from '../models/media.interface';
import { Media } from '../data/data-feed';

@Injectable({
  providedIn: 'root'
})
export class MediadataService {
  private mediadata: IMedia[] = Media
  
  getmedia(): IMedia[]{
    return this.mediadata
  }

  constructor() { }
}
