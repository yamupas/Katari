import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentmethodsRoutingModule } from './paymentmethods-routing.module';
import { PaymentmethodsComponent } from './paymentmethods.component';


@NgModule({
  declarations: [PaymentmethodsComponent],
  exports: [PaymentmethodsComponent],
  imports: [
    CommonModule,
    PaymentmethodsRoutingModule
  ]
})
export class PaymentmethodsModule { }
