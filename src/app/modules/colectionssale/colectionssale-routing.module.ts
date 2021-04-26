import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColectionssaleComponent } from './colectionssale.component';


const routes: Routes = [
  {
    path: '',
    component: ColectionssaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColectionssaleRoutingModule { }
