import { Producto } from './core/models/public/productsList.model';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';




declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Producto[] = [];

  constructor(private router: Router,private _productService:ProductService) {
   this.getProductos();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      $('html, body').animate({scrollTop: $('#top').position().top}, 'slow');
    });
  }

  get getTotal(): Observable<number> {
    return this._productService.cartTotalAmount();
  }

  removeItem(product: any) {
    this._productService.removeCartItem(product);
  }

  private getProductos()
  {
   try {
    this._productService.cartItems.subscribe(response =>
       this.products = response
       //console.log("carrito",response)
       );
   } catch (error) {
     console.log("error al consultar el carrito de compra",error);
   }
  }


}
