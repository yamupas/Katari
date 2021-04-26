import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentmethodsComponent } from './paymentmethods.component';


const routes: Routes = [
  {
    path: '',
    component: PaymentmethodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentmethodsRoutingModule { }
