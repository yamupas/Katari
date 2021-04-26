import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogfeaturedRoutingModule } from './blogfeatured-routing.module';
import { BlogfeaturedComponent } from './blogfeatured.component';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [BlogfeaturedComponent],
  exports: [BlogfeaturedComponent],
  imports: [
    CommonModule,
    BlogfeaturedRoutingModule,
    SwiperModule
  ]
})
export class BlogfeaturedModule { }
