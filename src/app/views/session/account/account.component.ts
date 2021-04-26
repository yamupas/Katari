import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { miCuenta } from 'src/app/core/models/public/account.model';
import { ApiService } from 'src/app/core/services/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  formAccount: FormGroup;
  miCuenta:miCuenta;

  constructor(private fb: FormBuilder, public api:ApiService) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }
  get nombreI() {
    return this.formAccount.get('nombre').invalid && this.formAccount.get('nombre').touched;
  }
  get apellidoI() {
    return this.formAccount.get('apellido').invalid && this.formAccount.get('apellido').touched;
  }
  get correoI() {
    return this.formAccount.get('correo').invalid && this.formAccount.get('correo').touched;
  }
  get celularI() {
    return this.formAccount.get('celular').invalid && this.formAccount.get('celular').touched;
  }
  get direccion1I() {
    return this.formAccount.get('direccion1').invalid && this.formAccount.get('direccion1').touched;
  }
  get direccion2I() {
    return this.formAccount.get('direccion2').invalid && this.formAccount.get('direccion2').touched;
  }


  crearFormulario() {
    this.formAccount = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      correo : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      celular : ['', Validators.required],
      ciudad : ['', Validators.required],
      direccionTipo : ['', Validators.required],
      direccion1 : ['', Validators.required],
      direccion2 : ['', Validators.required],
      direccion3 : ['', Validators.required],
      cDia : ['', Validators.required],
      cMes : ['', Validators.required],
      cAno : ['', Validators.required],      
    });
  }
  formCuenta() {
    if (this.formAccount.invalid) {
      return Object.values(this.formAccount.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    const body:miCuenta = {
      nombre: this.formAccount.value.nombre,
      apellido: this.formAccount.value.apellido,
      correo: this.formAccount.value.correo,
      celular: this.formAccount.value.celular,
      ciudad: this.formAccount.value.ciudad,
      direccionTipo : this.formAccount.value.direccionTipo,
      direccion1: this.formAccount.value.direccion1,
      direccion2: this.formAccount.value.direccion2,
      direccion3: this.formAccount.value.direccion3,
      cDia: this.formAccount.value.cDia,
      cMes: this.formAccount.value.cMes,
      cAno: this.formAccount.value.cAno,      
    };
    this.api.enviarDatosCuenta( body ).subscribe( (resp: any) => {           
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
     
       this.formAccount.reset();

}

}
