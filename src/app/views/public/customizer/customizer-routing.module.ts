import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizerComponent } from './customizer.component';


const routes: Routes = [
  {
    path: '',
    component: CustomizerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizerRoutingModule { }
