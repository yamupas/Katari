import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepbyRoutingModule } from './stepby-routing.module';
import { StepbyComponent } from './stepby.component';
import { CreateModule } from '../create/create.module';


@NgModule({
  declarations: [StepbyComponent],
  exports: [StepbyComponent],
  imports: [
    CommonModule,
    StepbyRoutingModule,
    CreateModule
  ]
})
export class StepbyModule { }
