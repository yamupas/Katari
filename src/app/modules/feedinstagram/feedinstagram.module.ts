import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedinstagramRoutingModule } from './feedinstagram-routing.module';
import { FeedinstagramComponent } from './feedinstagram.component';


@NgModule({
  declarations: [FeedinstagramComponent],
  exports: [FeedinstagramComponent],
  imports: [
    CommonModule,
    FeedinstagramRoutingModule
  ]
})
export class FeedinstagramModule { }
