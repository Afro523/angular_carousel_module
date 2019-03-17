import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { TimelineLite } from 'gsap'
@Component({
  selector: 'enl-angular-carousel-lib',
  templateUrl: './angular-carousel-lib.template.html',
  styles: []
})

export class AngularCarouselLibComponent implements OnInit {

  @Input() images: any[];

  @ViewChild('carouselContainer') carouselContainer: ElementRef;
  @ViewChild('arrowLeft') arrowLeft: ElementRef;
  @ViewChild('arrowRight') arrowRight: ElementRef;
  @ViewChildren('item') items: QueryList<ElementRef>;
  // @Input() masterName: string;

  constructor() { }
  
  ngOnInit() {
    console.log(this.images)
  }


  rotateRight(): void {
    console.log('Rotate Right')
  }

  rotateLeft(): void {
    console.log('Rotate Left')
  }

  chooseSlideDir(slideNum): void {
    console.log('chooseSlideDir')
  }
}
