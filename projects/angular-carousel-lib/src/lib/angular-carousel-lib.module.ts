import { NgModule } from '@angular/core';
import { AngularCarouselLibComponent } from './angular-carousel-lib.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AngularCarouselLibComponent],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [AngularCarouselLibComponent]
})
export class AngularCarouselLibModule { }
