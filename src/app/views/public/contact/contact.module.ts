import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';

import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NewsletterModule
  ]
})
export class ContactModule { }
