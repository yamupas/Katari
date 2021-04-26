import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { CreateModule } from '../create/create.module';


@NgModule({
  declarations: [TypesComponent],
  exports: [TypesComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    CreateModule
  ]
})
export class TypesModule { }
