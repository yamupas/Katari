import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductssalesRoutingModule } from './productssales-routing.module';
import { ProductssalesComponent } from './productssales.component';


@NgModule({
  declarations: [ProductssalesComponent],
  exports: [ProductssalesComponent],
  imports: [
    CommonModule,
    ProductssalesRoutingModule
  ]
})
export class ProductssalesModule { }
