import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepbyComponent } from './stepby.component';


const routes: Routes = [
  {
    path: '',
    component: StepbyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepbyRoutingModule { }
