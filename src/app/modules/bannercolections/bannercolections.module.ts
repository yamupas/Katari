import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannercolectionsRoutingModule } from './bannercolections-routing.module';
import { BannercolectionsComponent } from './bannercolections.component';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [BannercolectionsComponent],
  exports: [BannercolectionsComponent],
  imports: [
    CommonModule,
    BannercolectionsRoutingModule,
    SwiperModule
  ]
})
export class BannercolectionsModule { }
