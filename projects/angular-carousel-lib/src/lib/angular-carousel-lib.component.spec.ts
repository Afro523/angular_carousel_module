import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCarouselLibComponent } from './angular-carousel-lib.component';

describe('AngularCarouselLibComponent', () => {
  let component: AngularCarouselLibComponent;
  let fixture: ComponentFixture<AngularCarouselLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularCarouselLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCarouselLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
