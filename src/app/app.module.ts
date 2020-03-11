import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BreakWordPipe } from './break-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    TopNavComponent,
    CarouselComponent,
    PreviewComponent,
    BreakWordPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    SlickCarouselModule
  ],
  // exports: [PreviewComponent], //only needed when you need PreviewComponent in other module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
