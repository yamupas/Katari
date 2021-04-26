import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsinspirationRoutingModule } from './productsinspiration-routing.module';
import { ProductsinspirationComponent } from './productsinspiration.component';


@NgModule({
  declarations: [ProductsinspirationComponent],
  exports: [ProductsinspirationComponent],
  imports: [
    CommonModule,
    ProductsinspirationRoutingModule
  ]
})
export class ProductsinspirationModule { }
