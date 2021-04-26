import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { registroPago } from 'src/app/core/models/public/registroPago.model';
import { ApiService } from 'src/app/core/services/api.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  registroCompras:FormGroup;
  constructor(private fb:FormBuilder, public api:ApiService) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }
  get nombreI() {
    return this.registroCompras.get('nombre').invalid && this.registroCompras.get('nombre').touched;
  }
  get apellidoI() {
    return this.registroCompras.get('apellido').invalid && this.registroCompras.get('apellido').touched;
  }
  get correoI() {
    return this.registroCompras.get('correo').invalid && this.registroCompras.get('correo').touched;
  }
  get celularI() {
    return this.registroCompras.get('celular').invalid && this.registroCompras.get('celular').touched;
  }
  get direccion1I() {
    return this.registroCompras.get('direccion1').invalid && this.registroCompras.get('direccion1').touched;
  }
  get direccion2I() {
    return this.registroCompras.get('direccion2').invalid && this.registroCompras.get('direccion2').touched;
  }
  get passI() {
    return this.registroCompras.get('pass').invalid && this.registroCompras.get('pass').touched;
  }
  crearFormulario() {
    this.registroCompras = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      correo : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular : ['', Validators.required],
      ciudad : ['', Validators.required],
      direccionTipo : ['', Validators.required],
      direccion1 : ['', Validators.required],
      direccion2 : ['', Validators.required],
      direccion3 : ['', Validators.required],
      pass : ['', Validators.required],
      passR : ['', Validators.required],      
    });
  }
  regCompras() {
    if (this.registroCompras.invalid) {
      return Object.values(this.registroCompras.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const body:registroPago = {
      nombre: this.registroCompras.value.nombre,
      apellido: this.registroCompras.value.apellido,
      correo: this.registroCompras.value.correo,
      celular: this.registroCompras.value.celular,
      ciudad: this.registroCompras.value.ciudad,
      direccionTipo : this.registroCompras.value.direccionTipo,
      direccion1: this.registroCompras.value.direccion1,
      direccion2: this.registroCompras.value.direccion2,
      direccion3: this.registroCompras.value.direccion3,
      pass: this.registroCompras.value.pass,
      passR: this.registroCompras.value.passR,     
    };
    this.api.enviarDatosRegistroPago( body ).subscribe( (resp: any) => {           
       switch (resp.errorCode) {
         case '0':
           Swal.fire({
             icon: 'success',
             title: 'Mensaje enviado',
             showConfirmButton: false,
             timer: 2500,
           });
           break;        
         default:
           Swal.fire({
             icon: 'warning',
             title: 'Por favor intente de nuevo',
             showConfirmButton: false,
             timer: 1500,
           });
           break;
       }
     },
     () => {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor intente de nuevo',
        showConfirmButton: false,
        timer: 1500,
      });
     });
     
       this.registroCompras.reset();

}
}
