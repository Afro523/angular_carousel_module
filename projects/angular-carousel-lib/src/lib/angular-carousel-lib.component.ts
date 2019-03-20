import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TimelineLite, TweenLite } from 'gsap'
@Component({
  selector: 'enl-angular-carousel-lib',
  templateUrl: './angular-carousel-lib.template.html',
  styles: []
})

export class AngularCarouselLibComponent implements OnInit, AfterViewInit {

  @Input() elmArrInput: any[];
  @Input() heightInput: number | string;
  @ViewChild('componentContainer') componentContainer: ElementRef;
  @ViewChild('carouselContainer') carouselContainer: ElementRef;
  @ViewChild('arrowLeft') arrowLeft: ElementRef;
  @ViewChild('arrowRight') arrowRight: ElementRef;
  @ViewChildren('item') items: QueryList<ElementRef>;
  // @Input() masterName: string;

  componentWidth: number
  currentIndex: number
  elmArr

  constructor() { }
  
  ngOnInit() {
    this.elmArr = this.elmArrInput
    const height: string = this.parseHeight(this.heightInput)
    this.componentContainer.nativeElement.style.height = height
    console.log(this.componentContainer);
    
    this.componentWidth = this.componentContainer.nativeElement.offsetHeight
  }

  ngAfterViewInit() {
  }

  initCarousel(): void {
    const tl: TimelineLite = new TimelineLite()
    const arrLength: number = this.elmArr.length

    // Set height of carousel container
    this.carouselContainer.nativeElement.style.height = this.elmArr[0].offsetHeight.toString() + 'px'

    const imgWidth = this.elmArr[0].offsetWidth
    const arrowPos = (this.componentWidth * .25) - ((imgWidth * .8) / 2)

    // Set position of left and right arrow
    this.arrowRight.nativeElement.style.right = (arrowPos / 2) + 'px'
    this.arrowLeft.nativeElement.style.left = (arrowPos / 2) + 'px'

    this.elmArr.forEach((image) => {
      TweenLite.to(image, 0,
        {
          left: (this.componentWidth * .5) - (this.elmArr[0].offsetWidth / 2),
          opacity: .75,
          transform: 'scale(.8)',
        })
    })
    // Set carousel to center
    tl
      .to(this.elmArr[0], 0,
      {
        left: (this.componentWidth * .5) - (this.elmArr[0].offsetWidth / 2),
        opacity: 1,
        zIndex: 2,
        transform: 'scale(1)',
      })
      .to(this.elmArr[arrLength - 1], 0,
      {
        left: (this.componentWidth * .25) - (this.elmArr[arrLength - 1].offsetWidth / 2),
        opacity: .75,
        transform: 'scale(.8)',
      })
      .to(this.elmArr[1], 0,
      {
        left: (this.componentWidth * .75) - (this.elmArr[1].offsetWidth / 2),
        opacity: .75,
        transform: 'scale(.8)',
      })
    tl.kill()
  }

  rotateLeft(): void {
    const tl: TimelineLite = new TimelineLite()
    const index: number = this.currentIndex
    let prevIndex: number
    if (index === 0) {
      prevIndex = this.elmArr.length - 1
    } else {
      prevIndex = this.currentIndex - 1
    }

    let nextIndex: number
    if (index + 1 > this.elmArr.length - 1) {
      nextIndex = 0
    } else {
      nextIndex = index + 1
    }

    let nextUnhiddenSlide: number
    if (index + 2 > this.elmArr.length - 1) {
      if (index + 2 > this.elmArr.length) {
        nextUnhiddenSlide = 1
      } else {
        nextUnhiddenSlide = 0
      }
    } else {
      nextUnhiddenSlide = index + 2
    }

    tl
      // starts left goes to back
      .to(this.elmArr[prevIndex], 1,
      {
        left: (this.componentWidth * .5) - (this.elmArr[prevIndex].offsetWidth / 2),
        opacity: .5,
        zIndex: 1,
      })
      // starts center goes left
      .to(this.elmArr[index], 1,
      {
        left: (this.componentWidth * .25) - (this.elmArr[index].offsetWidth / 2),
        opacity: .75,
        transform: 'scale(.8)',
        zIndex: 2,
      }, '-=1')
      // starts right goes to center
      .to(this.elmArr[nextIndex], 1,
      {
        left: (this.componentWidth * .5) - (this.elmArr[nextIndex].offsetWidth / 2),
        opacity: 1,
        transform: 'scale(1)',
        zIndex: 3,
      }, '-=1')
      // starts back goes right
      .to(this.elmArr[nextUnhiddenSlide], 1,
      {
        left: (this.componentWidth * .75) - (this.elmArr[nextUnhiddenSlide].offsetWidth / 2),
        opacity: .75,
        transform: 'scale(.8)',
        zIndex: 2,
      }, '-=1')

    if (this.currentIndex + 1 > this.elmArr.length - 1) {
      this.currentIndex = 0
    } else {
      this.currentIndex = this.currentIndex + 1
    }

    tl.play()
  }

  rotateRight(): void {
    const tl: TimelineLite = new TimelineLite()
    const index: number = this.currentIndex

    let leftSlide: number
    if (index === 0) {
      leftSlide = this.elmArr.length - 1
    } else {
      leftSlide = this.currentIndex - 1
    }

    let rightSlide: number
    if (index + 1 > this.elmArr.length - 1) {
      rightSlide = 0
    } else {
      rightSlide = index + 1
    }

    let nextUnhiddenSlide: number
    if (index - 2 < 0) {
      if (index - 2 < -1) {
        nextUnhiddenSlide = this.elmArr.length - 2
      } else {
        nextUnhiddenSlide = this.elmArr.length - 1
      }
    } else {
      nextUnhiddenSlide = index - 2
    }

    tl
      // starts right goes to back
      .to(this.elmArr[rightSlide], 1,
      {
        left: (this.componentWidth * .5) - (this.elmArr[rightSlide].offsetWidth / 2),
        opacity: .5,
        zIndex: 1,
      })
      // starts back goes left
      .to(this.elmArr[nextUnhiddenSlide], 1,
      {
        left: (this.componentWidth * .25) - (this.elmArr[nextUnhiddenSlide].offsetWidth / 2),
        opacity: .75,
        transform: 'scale(.8)',
        zIndex: 2,
      }, '-=1')
      // starts left goes to center
      .to(this.elmArr[leftSlide], 1,
      {
        left: (this.componentWidth * .5) - (this.elmArr[leftSlide].offsetWidth / 2),
        opacity: 1,
        transform: 'scale(1)',
        zIndex: 3,
      }, '-=1')
      // starts center goes right
      .to(this.elmArr[index], 1,
      {
        left: (this.componentWidth * .75) - (this.elmArr[index].offsetWidth / 2),
        opacity: .75,
        transform: 'scale(.8)',
        zIndex: 2,
      }, '-=1')

    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.elmArr.length - 1
    } else {
      this.currentIndex = this.currentIndex - 1
    }

    tl.play()
  }

  chooseSlideDir(slideNum: number) {
    if (slideNum < this.currentIndex) {
      if (slideNum === 0) {
        if (this.currentIndex === this.elmArr.length - 1) {
          this.rotateLeft()
        } else {
          this.rotateRight()
        }
      } else {
        this.rotateRight()
      }
    } else if (slideNum > this.currentIndex) {
      if (slideNum === this.elmArr.length - 1) {
        if (this.currentIndex === 0) {
          this.rotateRight()
        } else {
          this.rotateLeft()
        }
      } else {
        this.rotateLeft()
      }
    } else {
      console.log('Run whatever we want to do when the main slide is selected')
    }
  }

  parseHeight(input: string | number): string{
    if(typeof input === 'number'){
      console.log(input, "number")
    } else if (typeof input === 'string'){
      const regex: RegExp = /(px|vw|%|vh)$/
      const found: RegExpMatchArray = input.match(regex)
      if(found){
        console.log("Found ", found);
        
        return input
      } else {
        console.log("Improper Unit Found");
      }
    } else {
      console.log('must have type of string or number'); 
    }
  }
}
