import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignsRoutingModule } from './designs-routing.module';
import { DesignsComponent } from './designs.component';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';


@NgModule({
  declarations: [DesignsComponent],
  imports: [
    CommonModule,
    DesignsRoutingModule,
    NewsletterModule
  ]
})
export class DesignsModule { }
