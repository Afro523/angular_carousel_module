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
    fixture.componentInstance.elmArrInput;
    fixture.componentInstance.heightInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('parseHeight', () => {
    it('should parse px', () => {
      const string = '100px';
      const output = component.parseHeight(string);
      expect(output).toBe('100px')
    })
    it('should parse vw', () => {
      const string = '100vw';
      const output = component.parseHeight(string);
      expect(output).toBe('100vw')
    })
    it('should parse vh', () => {
      const string = '100vh';
      const output = component.parseHeight(string);
      expect(output).toBe('100vh')
    })
    it('should parse %', () => {
      const string = '100%';
      const output = component.parseHeight(string);
      expect(output).toBe('100%')
    })
    it('should fail', () => {
      const string = '100xp';
      const output = component.parseHeight(string);
      expect(output).toBe(undefined)
    })
  })
});
