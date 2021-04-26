import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectionsdetailRoutingModule } from './colectionsdetail-routing.module';
import { ColectionsdetailComponent } from './colectionsdetail.component';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';
import { ProductssalesModule } from 'src/app/modules/productssales/productssales.module';


@NgModule({
  declarations: [ColectionsdetailComponent],
  imports: [
    CommonModule,
    ColectionsdetailRoutingModule,
    NewsletterModule,
    ProductssalesModule
  ]
})
export class ColectionsdetailModule { }
