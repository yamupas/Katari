import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductssalesComponent } from './productssales.component';


const routes: Routes = [
  {
    path: '',
    component: ProductssalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductssalesRoutingModule { }
