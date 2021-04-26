import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectionsRoutingModule } from './colections-routing.module';
import { ColectionsComponent } from './colections.component';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';
import { ColectionslistModule } from 'src/app/modules/colectionslist/colectionslist.module';
import { ColectionssaleModule } from 'src/app/modules/colectionssale/colectionssale.module';
import { ProductssalesModule } from 'src/app/modules/productssales/productssales.module';
import { ProductsinspirationModule } from 'src/app/modules/productsinspiration/productsinspiration.module';


@NgModule({
  declarations: [ColectionsComponent],
  imports: [
    CommonModule,
    ColectionsRoutingModule,
    NewsletterModule,
    ColectionslistModule,
    ColectionssaleModule,
    ProductssalesModule,
    ProductsinspirationModule
  ]
})
export class ColectionsModule { }
