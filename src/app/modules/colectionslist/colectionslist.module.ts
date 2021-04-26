import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectionslistRoutingModule } from './colectionslist-routing.module';
import { ColectionslistComponent } from './colectionslist.component';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [ColectionslistComponent],
  exports: [ColectionslistComponent],
  imports: [
    CommonModule,
    ColectionslistRoutingModule,
    SwiperModule
  ]
})
export class ColectionslistModule { }
