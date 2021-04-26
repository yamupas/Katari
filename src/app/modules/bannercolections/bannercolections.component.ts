import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Colection, Colections } from 'src/app/core/models/public/colections.model';
import { ApiService } from 'src/app/core/services/api.service';

declare var $: any;

const config: SwiperConfigInterface = {
  loop:true,
  slidesPerView: 2,
  spaceBetween: 0,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next-p-2',
    prevEl: '.swiper-button-prev-p-2',
  },
};

@Component({
  selector: 'app-bannercolections',
  templateUrl: './bannercolections.component.html',
  styleUrls: ['./bannercolections.component.scss']
})
export class BannercolectionsComponent implements OnInit {

  colecciones: Array<Colection> = null;

  configSwiper = config;
  index = 0;

  constructor(public api: ApiService) { }

  ngOnInit() {
    $(function() {
      $('.btn-6')
        .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
      $('[href="#"]').click(function(){return false});
    });

    this.api.getColecciones().subscribe((items: Colections)=>{
      console.log("colecciones",items.data);
      this.colecciones= items.data;
    },
    (error)=>{

    });
  }

}
