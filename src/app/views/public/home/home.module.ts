import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerModule } from 'src/app/modules/banner/banner.module';
import { TypesModule } from 'src/app/modules/types/types.module';
import { StepbyModule } from 'src/app/modules/stepby/stepby.module';
import { PaymentmethodsModule } from 'src/app/modules/paymentmethods/paymentmethods.module';
import { ProductsinspirationModule } from 'src/app/modules/productsinspiration/productsinspiration.module';
import { ProductssalesModule } from 'src/app/modules/productssales/productssales.module';
import { BannercolectionsModule } from 'src/app/modules/bannercolections/bannercolections.module';
import { BlogfeaturedModule } from 'src/app/modules/blogfeatured/blogfeatured.module';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerModule,
    TypesModule,
    StepbyModule,
    PaymentmethodsModule,
    ProductsinspirationModule,
    ProductssalesModule,
    BannercolectionsModule,
    BlogfeaturedModule,
    NewsletterModule
  ]
})
export class HomeModule { }
