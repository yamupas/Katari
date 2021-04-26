import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogfeaturedModule } from 'src/app/modules/blogfeatured/blogfeatured.module';
import { BloglistModule } from 'src/app/modules/bloglist/bloglist.module';
import { BlogsearchModule } from 'src/app/modules/blogsearch/blogsearch.module';
import { BlogtagsModule } from 'src/app/modules/blogtags/blogtags.module';
import { FeedinstagramModule } from 'src/app/modules/feedinstagram/feedinstagram.module';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    BlogfeaturedModule,
    BloglistModule,
    BlogsearchModule,
    BlogtagsModule,
    FeedinstagramModule,
    NewsletterModule
  ]
})
export class BlogModule { }
