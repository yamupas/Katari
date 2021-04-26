import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnsRoutingModule } from './returns-routing.module';
import { ReturnsComponent } from './returns.component';


@NgModule({
  declarations: [ReturnsComponent],
  imports: [
    CommonModule,
    ReturnsRoutingModule
  ]
})
export class ReturnsModule { }
