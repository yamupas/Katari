import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectionssaleRoutingModule } from './colectionssale-routing.module';
import { ColectionssaleComponent } from './colectionssale.component';


@NgModule({
  declarations: [ColectionssaleComponent],
  exports: [ColectionssaleComponent],
  imports: [
    CommonModule,
    ColectionssaleRoutingModule
  ]
})
export class ColectionssaleModule { }
