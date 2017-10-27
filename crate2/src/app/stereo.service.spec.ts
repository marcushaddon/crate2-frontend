import { TestBed, inject } from '@angular/core/testing';

import { StereoService } from './stereo.service';

describe('StereoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StereoService]
    });
  });

  it('should be created', inject([StereoService], (service: StereoService) => {
    expect(service).toBeTruthy();
  }));
});
