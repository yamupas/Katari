import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { CreateModule } from '../create/create.module';

@NgModule({
  declarations: [BannerComponent],
  exports: [BannerComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    SwiperModule,
    CreateModule
  ]
})
export class BannerModule { }
