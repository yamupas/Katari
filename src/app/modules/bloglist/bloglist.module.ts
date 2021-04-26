import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloglistRoutingModule } from './bloglist-routing.module';
import { BloglistComponent } from './bloglist.component';


@NgModule({
  declarations: [BloglistComponent],
  exports: [BloglistComponent],
  imports: [
    CommonModule,
    BloglistRoutingModule
  ]
})
export class BloglistModule { }
