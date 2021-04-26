import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaldataRoutingModule } from './personaldata-routing.module';
import { PersonaldataComponent } from './personaldata.component';


@NgModule({
  declarations: [PersonaldataComponent],
  imports: [
    CommonModule,
    PersonaldataRoutingModule
  ]
})
export class PersonaldataModule { }
