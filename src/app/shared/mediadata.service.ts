import { Injectable } from '@angular/core';
import { IMedia } from '../models/media.interface';
import { Media } from '../data/data-feed';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediadataService {
  private apiKey = 'AIzaSyDMCHLLEEgYQO5mNlDihx6N8nP6EP_HVPQ';
  private mediadata: IMedia[] // = Media
  
  constructor(private client: HttpClient) { }

  getmedia(): IMedia[]{
    return this.mediadata;
  }

  getPopularVideos(): Observable<IMedia[]> {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${this.apiKey}`;
    return this.client.get(url).pipe(
        map((value: any) => this.mapItems(value.items)));
  }
  mapItems(items: any[]): IMedia[] {
    return items.map(item => {
      return {
        name: item.snippet.title,
        description: item.snippet.publishedAt
        //description: item.snippet.description
      } as IMedia;
    })
  }
}
