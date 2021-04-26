import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogtagsComponent } from './blogtags.component';


const routes: Routes = [
  {
    path: '',
    component: BlogtagsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogtagsRoutingModule { }
