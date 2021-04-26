import { Producto } from './../../core/models/public/productsList.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { datosFRegRap } from 'src/app/core/models/public/FormRegRap.model';
import { datosLoginModal } from 'src/app/core/models/public/loginModal.model';
import { resetearPass } from 'src/app/core/models/public/resetearPass.model';
import { respLoginModal } from '../../core/models/public/loginModal.model';

import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  //producto
  public products: Producto[] = [];
  public productsWishlist: Producto[] = [];

  infoRegistroRapido:FormGroup;
  datosLogin:FormGroup;
  correoReset:FormGroup;

  resPass:boolean=false;

  constructor(private fb:FormBuilder,
    private _productService:ProductService,
    public api: ApiService ) {

    this.crearFormulario();
    this.crearLogin();
    this.crearCorreoR();
    this.getProductos();
    this.getWishlist();
  }

  ngOnInit(): void {
  }

  get correoI(){
    return this.infoRegistroRapido.get('correo').invalid && this.infoRegistroRapido.get('correo').touched;
  }
  get passI(){
    return this.infoRegistroRapido.get('pass').invalid && this.infoRegistroRapido.get('pass').touched;
  }
  get correoL(){
    return this.datosLogin.get('correoL').invalid && this.datosLogin.get('correoL').touched;
  }
  get passL(){
    return this.datosLogin.get('passL').invalid && this.datosLogin.get('passL').touched;
  }

  get correoR(){
    return this.correoReset.get('emailReset').invalid && this.correoReset.get('emailReset').touched;
  }
  restablecerPass(){
    if(this.resPass===true){
      this.resPass=false;
    }else{
      this.resPass=true;
    }
  }
  crearFormulario(){
    this.infoRegistroRapido=this.fb.group({
      correo:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pass:['',Validators.required]
    })
  }
  formRegistroRapido(){
    //console.log(this.infoRegistroRapido.value);

    if(this.infoRegistroRapido.invalid){
      return Object.values(this.infoRegistroRapido.controls).forEach(control=>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAsTouched());
        }else{
          control.markAsTouched();
        }


      });

    }
    const body: datosFRegRap ={
      email: this.infoRegistroRapido.value.correo,
      pass: this.infoRegistroRapido.value.pass
    }
    this.api.registroRapido( body ).subscribe( (resp: any) => {
    },
    (error) => {
      console.log('error desconocido intente de nuevo');
    });

    this.infoRegistroRapido.reset();
    //console.log('Exito');
  }
  crearCorreoR(){
    this.correoReset=this.fb.group({
      emailReset:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }

  crearLogin(){
    this.datosLogin=this.fb.group({
      correoL:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      passL:['',Validators.required]
    })
  }

  loginModal(){
    //console.log(this.datosLogin.value);
    if(this.datosLogin.invalid){
      return Object.values(this.datosLogin.controls).forEach(control=>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAsTouched());
        }else{
          control.markAsTouched();
        }
    });
    }
    const body: datosLoginModal ={
      email: this.datosLogin.value.correoL,
      password: this.datosLogin.value.passL,
    }
    this.api.loginModal( body ).subscribe( (resp: respLoginModal) => {
     // console.log(resp.errorCode);
      switch(resp.errorCode){
        case '0':
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer:1500,
          })
          break;
        case '101':
            Swal.fire({
              icon: 'error',
              title: 'Datos incorrectos',
              showConfirmButton: false,
              timer:1500,
            })
        break;
        default:
          Swal.fire({
            icon: 'warning',
            title: 'Por favor intente de nuevo',
            showConfirmButton: false,
            timer:1500,
          })
          break;
      }
    },
    (error) => {
      console.log('error desconocido intente de nuevo');
    });

    this.datosLogin.reset();
  }

  resetPass(){

    //console.log(this.correoReset.value);
    if(this.correoReset.invalid){
      return Object.values(this.correoReset.controls).forEach(control=>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAsTouched());
        }else{
          control.markAsTouched();
        }
    });
    }
    const body: resetearPass ={
      email: this.correoReset.value.correoReset,

    }
    this.api.resetearPass( body ).subscribe( (resp: any) => {
      console.log(resp.errorCode);
      switch(resp.errorCode){
        case '0':
          Swal.fire({
            icon: 'success',
            title: 'Te enviamos un correo con instrucciones para activar cuenta',
            showConfirmButton: false,
            timer:2500,
          })
          break;
        default:
          Swal.fire({
            icon: 'warning',
            title: 'Por favor intente de nuevo',
            showConfirmButton: false,
            timer:1500,
          })
          break;
      }
    },
    (error) => {
      console.log('error desconocido intente de nuevo');
    });

    this.correoReset.reset();
    //console.log('Exito');
  }


  // carro de compra

  get getTotal(): Observable<number> {
    return this._productService.cartTotalAmount();
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
  removeItem(product: any) {
    this._productService.removeCartItem(product);
  }
  private getWishlist()
  {
   try {
    this._productService.wishlistItems.subscribe(response =>
       this.productsWishlist = response
       //console.log("carrito",response)
       );
   } catch (error) {
     console.log("error al consultar el carrito de compra",error);
   }
  }
  removeItemWishlist(product: any) {
    this._productService.removeWishlistItem(product);
  }
  //
}
