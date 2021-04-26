import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Banner, Banners } from 'src/app/core/models/public/banner.model';
import { ApiService } from 'src/app/core/services/api.service';

const config: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-p',
    prevEl: '.swiper-button-prev-p'
  },
};

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners: Array<Banner> = null;

  configSwiper = config;
  index = 0;

  constructor(public api: ApiService) { }

  ngOnInit() {

    this.api.getBanner().subscribe((items: Banners)=>{
      this.banners= items.data; 
    },
    (error)=>{

    })
  }

}