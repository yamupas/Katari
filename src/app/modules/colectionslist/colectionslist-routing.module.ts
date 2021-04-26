import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColectionslistComponent } from './colectionslist.component';


const routes: Routes = [
  {
    path: '',
    component: ColectionslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColectionslistRoutingModule { }
