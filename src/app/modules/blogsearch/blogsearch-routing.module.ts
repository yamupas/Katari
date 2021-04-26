import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsearchComponent } from './blogsearch.component';


const routes: Routes = [
  {
    path: '',
    component: BlogsearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsearchRoutingModule { }
