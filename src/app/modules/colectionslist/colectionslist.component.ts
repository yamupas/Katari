import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const config: SwiperConfigInterface = {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-c',
    prevEl: '.swiper-button-prev-c',
  },
};

@Component({
  selector: 'app-colectionslist',
  templateUrl: './colectionslist.component.html',
  styleUrls: ['./colectionslist.component.scss']
})
export class ColectionslistComponent implements OnInit {

  configSwiper = config;
  index = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
