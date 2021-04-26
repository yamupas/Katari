import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { NewsletterModule } from 'src/app/modules/newsletter/newsletter.module';
import { CheckoutComponent } from './checkout.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    NewsletterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class CheckoutModule { }
