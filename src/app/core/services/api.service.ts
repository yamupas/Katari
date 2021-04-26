import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { datosNewsletter } from '../models/public/newsletter.model';

const headers: any = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  // Newsletter
  enviarDatosNewsletter(body: datosNewsletter) {

    return this.http.post( environment.urlApi + 'newsletter', body, {headers} );
  }

  // Registro Rapido
  registroRapido(body: any) {

    return this.http.post( environment.urlApi + 'newsletter', body, {headers} );
  }
  // Login modal
  loginModal(body: any) {
    return this.http.post( environment.urlApi + 'user/login', body, {headers} );
  }
  // Contacto
  enviarDatosContacto(body: any) {

    return this.http.post( environment.urlApi + 'contact', body, {headers} );
  }

  // miCuenta
  enviarDatosCuenta(body: any) {
    return this.http.post( environment.urlApi + 'contact', body, {headers} );
  }

  // Registro Pago
  enviarDatosRegistroPago(body: any) {
    return this.http.post( environment.urlApi + 'contact', body, {headers} );
  }

  // Reset Pass
  resetearPass(body: any) {
    return this.http.post( environment.urlApi + 'user/account/password/reset', body, {headers} );
  }
  // banner Home
  getBanner(){
    return this.http.get(environment.urlApi + 'slider');
  }

  // Listado blog
  getBlog(offset: number, limit: number){
    return this.http.get(environment.urlApi + 'blog/article/' + offset + '/' + limit + '/');
  }
  // Detalle blog
  detalleBlog(id: string){
    return this.http.get(environment.urlApi + 'blog/article/' + id);
  }

  // Listado productos
  getProduct(){
    return this.http.post(environment.urlApi + 'product/1/10', {headers});
  }

  // Listado colecciones
  getColecciones(){
    return this.http.get(environment.urlApi + 'collection', {headers});
  }
  // Detalle coleccion
  detalleColeccion(id: string){
    return this.http.get(environment.urlApi + 'collection/' + id, {headers});
  }

  /* PERSONALIZADOR */
  // Init
  initPersonalizador(body){
    return this.http.post(environment.urlApi + 'customizer/new', body, {headers});
  }
}
