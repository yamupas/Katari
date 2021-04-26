import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomizerRoutingModule } from './customizer-routing.module';
import { CustomizerComponent } from './customizer.component';


@NgModule({
  declarations: [CustomizerComponent],
  imports: [
    CommonModule,
    CustomizerRoutingModule
  ]
})
export class CustomizerModule { }
