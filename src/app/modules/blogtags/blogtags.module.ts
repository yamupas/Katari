import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogtagsRoutingModule } from './blogtags-routing.module';
import { BlogtagsComponent } from './blogtags.component';


@NgModule({
  declarations: [BlogtagsComponent],
  exports: [BlogtagsComponent],
  imports: [
    CommonModule,
    BlogtagsRoutingModule
  ]
})
export class BlogtagsModule { }
