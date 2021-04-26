import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedinstagramComponent } from './feedinstagram.component';


const routes: Routes = [
  {
    path: '',
    component: FeedinstagramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedinstagramRoutingModule { }
