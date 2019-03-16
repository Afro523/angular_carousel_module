import { TestBed } from '@angular/core/testing';

import { AngularCarouselLibService } from './angular-carousel-lib.service';

describe('AngularCarouselLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularCarouselLibService = TestBed.get(AngularCarouselLibService);
    expect(service).toBeTruthy();
  });
});
