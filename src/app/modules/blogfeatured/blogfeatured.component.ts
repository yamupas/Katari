import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ApiService } from 'src/app/core/services/api.service';
import { Doc, listadoBlog } from '../../core/models/public/blog.model';

const config: SwiperConfigInterface = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next-p-3',
    prevEl: '.swiper-button-prev-p-3',
  },
};

@Component({
  selector: 'app-blogfeatured',
  templateUrl: './blogfeatured.component.html',
  styleUrls: ['./blogfeatured.component.scss']
})
export class BlogfeaturedComponent implements OnInit {

  @Input() link;
  @Input() title;

  blogItems: Array<Doc>=[];

  configSwiper = config;
  index = 0;

  constructor( public api:ApiService) { }

  ngOnInit(){

    this.api.getBlog(1, 5).subscribe((items:listadoBlog)=>{
      this.blogItems= items.data.docs; 
    },
    (error)=>{

    })
  }

}
