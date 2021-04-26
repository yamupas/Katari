import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogdetailRoutingModule } from './blogdetail-routing.module';
import { BlogdetailComponent } from './blogdetail.component';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';
import { BlogsearchModule } from 'src/app/modules/blogsearch/blogsearch.module';
import { BlogtagsModule } from 'src/app/modules/blogtags/blogtags.module';
import { FeedinstagramModule } from 'src/app/modules/feedinstagram/feedinstagram.module';


@NgModule({
  declarations: [BlogdetailComponent],
  imports: [
    CommonModule,
    BlogdetailRoutingModule,
    NewsletterModule,
    BlogsearchModule,
    BlogtagsModule,
    FeedinstagramModule
  ]
})
export class BlogdetailModule { }
