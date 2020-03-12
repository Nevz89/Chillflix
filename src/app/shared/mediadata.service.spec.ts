import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MediadataService } from "./mediadata.service";
import { IMedia } from "../models/media.interface";
import { of } from "rxjs";
import { HttpClient } from '@angular/common/http';

describe("MediadataService", () => {
  let service: MediadataService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ MediadataService ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MediadataService);
  });

  it("should get popular videos", () => {
    // Arrange
    const httpCallResult: any = {
      items: []
    };

    const mappedResult = [];

    // Act
    service.getPopularVideos().subscribe(actualMovieResult => {
      // Assert
      expect(actualMovieResult).toEqual(mappedResult);
    });

    // Assert
    const expectedUrl = 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyDMCHLLEEgYQO5mNlDihx6N8nP6EP_HVPQ';
    const req = httpTestingController.expectOne(expectedUrl); // expect 1 call

    expect(req.request.method).toEqual('GET'); // expect it to be a get
    req.flush(httpCallResult); // respond to the request
    httpTestingController.verify();   // no outstanding requests?
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
