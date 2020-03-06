import { TestBed } from '@angular/core/testing';

import { MediadataService } from './mediadata.service';

describe('MediadataService', () => {
  let service: MediadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
