import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColectionsComponent } from './colections.component';


const routes: Routes = [
  {
    path: '',
    component: ColectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColectionsRoutingModule { }
