import { TestBed } from "@angular/core/testing";

import { MediadataService } from "./mediadata.service";
import { IMedia } from "../models/media.interface";
import { of } from "rxjs";

describe("MediadataService", () => {
  let service: MediadataService;
  let httpClientSpy: { get: jasmine.Spy; post: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get", "post"]);

    service = new MediadataService(<any>httpClientSpy);
  });

  it("should get popular videos", () => {
    // Arrange
    const expectedMovieResult: any = [];

    httpClientSpy.get.and.returnValue(of(expectedMovieResult));

    // Act
    service.getPopularVideos().subscribe(actualMovieResult => {
      // Assert
      expect(actualMovieResult).toEqual(expectedMovieResult);
    });
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
