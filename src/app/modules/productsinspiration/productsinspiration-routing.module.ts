import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsinspirationComponent } from './productsinspiration.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsinspirationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsinspirationRoutingModule { }
