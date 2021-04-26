import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsearchRoutingModule } from './blogsearch-routing.module';
import { BlogsearchComponent } from './blogsearch.component';


@NgModule({
  declarations: [BlogsearchComponent],
  exports: [BlogsearchComponent],
  imports: [
    CommonModule,
    BlogsearchRoutingModule
  ]
})
export class BlogsearchModule { }
