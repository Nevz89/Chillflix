import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { MediadataService } from '../shared/mediadata.service';
import { PreviewService } from '../shared/preview.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { IMedia } from '../models/media.interface';


describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  let mediaDataServiceStub: any = { getPopularVideos: () => {}};
  let previewServiceStub: any = {
    setVideoPreview: (video: IMedia) => {}
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ],
      imports: [
        YouTubePlayerModule,
        SlickCarouselModule
      ],
      providers: [
        { provide: MediadataService, useValue: mediaDataServiceStub },
        { provide: PreviewService, useValue: previewServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectVideo calls service with selecting a video', () => {
    // Arrange
    const testVideo: IMedia = { name: 'Grote film', videoId: '112' } as IMedia;
    const serviceSpy = spyOn(previewServiceStub, 'setVideoPreview');

    // Act
    component.selectVideo(testVideo);

    // Assert
    expect(serviceSpy).toHaveBeenCalledTimes(1);
    expect(serviceSpy).toHaveBeenCalledWith(testVideo);

    // service methode is 1x gecalled.a
    // observable videos$ gevuld is.
  });
});
