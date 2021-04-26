import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutusComponent } from './aboutus.component';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';
import { CreateModule } from 'src/app/modules/create/create.module';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    NewsletterModule,
    CreateModule
  ]
})
export class AboutusModule { }
