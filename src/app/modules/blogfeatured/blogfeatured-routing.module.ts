import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogfeaturedComponent } from './blogfeatured.component';


const routes: Routes = [
  {
    path: '',
    component: BlogfeaturedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogfeaturedRoutingModule { }
