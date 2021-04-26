import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './views/public/contact/contact.component';


const routes: Routes = [
  // Public
  {
    path: '',
    loadChildren: './views/public/home/home.module#HomeModule'
  },
  {
    path: 'conocenos',
    loadChildren: './views/public/aboutus/aboutus.module#AboutusModule'
  },
  {
    path: 'blog',
    loadChildren: './views/public/blog/blog.module#BlogModule'
  },
    {
      path: 'blog/:article',
      loadChildren: './views/public/blog/blogdetail/blogdetail.module#BlogdetailModule'
    },
  {
    path: 'colecciones',
    loadChildren: './views/public/colections/colections.module#ColectionsModule'
  },
    {
      path: 'colecciones/:colection',
      loadChildren: './views/public/colections/colectionsdetail/colectionsdetail.module#ColectionsdetailModule'
    },
  {
    path: 'personalizador/:categoria',
    loadChildren: './views/public/customizer/customizer.module#CustomizerModule'
  },
  {
    path: 'pago',
    loadChildren: './views/public/checkout/checkout.module#CheckoutModule'
  },
  {
    path: 'legal/terminos',
    loadChildren: './views/public/conditions/conditions.module#ConditionsModule'
  },
  {
    path: 'legal/devoluciones',
    loadChildren: './views/public/returns/returns.module#ReturnsModule'
  },
  {
    path: 'legal/datos-personales',
    loadChildren: './views/public/personaldata/personaldata.module#PersonaldataModule'
  },
  {
    path: 'legal/avisos-legales',
    loadChildren: './views/public/notices/notices.module#NoticesModule'
  },
  {
    path: 'contactanos',
    loadChildren: './views/public/contact/contact.module#ContactModule'
  },
  // Session
  {
    path: 'mi-cuenta',
    loadChildren: './views/session/account/account.module#AccountModule'
  },
  {
    path: 'mis-pedidos',
    loadChildren: './views/session/orders/orders.module#OrdersModule'
  },
  {
    path: 'mis-disenos',
    loadChildren: './views/session/designs/designs.module#DesignsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
