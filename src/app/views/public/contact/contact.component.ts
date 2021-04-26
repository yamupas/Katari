import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { datosContacto } from 'src/app/core/models/shared/contacto.model';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/core/services/api.service';

import Swal from 'sweetalert2';
import { contactForm } from '../../../core/models/public/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formC: FormGroup;

  datosContacto: datosContacto;

  constructor(private fb: FormBuilder,
    public api:ApiService) { 
    this.datosContacto = environment.contacto;

    this.crearFormulario();
  }
  ngOnInit(): void {
  }

  get nombreI() {
    return this.formC.get('nombre').invalid && this.formC.get('nombre').touched;
  }
  get correoI() {
    return this.formC.get('correo').invalid && this.formC.get('correo').touched;
  }
  get celularI() {
    return this.formC.get('celular').invalid && this.formC.get('celular').touched;
  }
  get mensajeI() {
    return this.formC.get('mensaje').invalid && this.formC.get('mensaje').touched;
  }
  
  crearFormulario() {
    this.formC = this.fb.group({
      nombre : ['', Validators.required],
      correo : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular : ['', Validators.required],
      mensaje : ['', Validators.required],
    });
  }
  formContacto() {
      if (this.formC.invalid) {
        return Object.values(this.formC.controls).forEach(control => {
          if (control instanceof FormGroup) {
            Object.values(control.controls).forEach(control => control.markAsTouched());
          } else {
            control.markAsTouched();
          }
        });
      }
      const body: contactForm = {
        name: this.formC.value.nombre,
        email: this.formC.value.correo,
        phone: this.formC.value.celular,
        message: this.formC.value.mensaje,
        
       };
      this.api.enviarDatosContacto( body ).subscribe( (resp: any) => {           
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
       
         this.formC.reset();
  
  }
}
