import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannercolectionsComponent } from './bannercolections.component';


const routes: Routes = [
  {
    path: '',
    component: BannercolectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannercolectionsRoutingModule { }
