import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaldataComponent } from './personaldata.component';


const routes: Routes = [
  {
    path: '',
    component: PersonaldataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaldataRoutingModule { }
