import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { datosNewsletter, datosNewsletterResponse } from 'src/app/core/models/public/newsletter.model';
import { ApiService } from 'src/app/core/services/api.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  formNew:FormGroup;
  constructor( private fb:FormBuilder, public api: ApiService) {
    this.crearSuscripcion();
   }

  ngOnInit() {
  }

  get correoN(){
    return this.formNew.get('correoN').invalid && this.formNew.get('correoN').touched;
  }

  crearSuscripcion(){
    this.formNew=this.fb.group({
      correoN:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    })
  }

  suscripcion(){
    if(this.formNew.invalid){
      return Object.values(this.formNew.controls).forEach(control=>{
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control=>control.markAsTouched());
        }else{
          control.markAsTouched();
        }        
      });      
    }

    const body: datosNewsletter = {
      email: this.formNew.value.correoN
    }

    this.api.enviarDatosNewsletter( body ).subscribe( (resp: datosNewsletterResponse) => {
      switch(resp.errorCode){
        case '0':
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer:1500,
          }) 
          this.formNew.reset();
          break;
        case '100':
          Swal.fire({
            icon: 'warning',
            title: 'Ya fue registrado',
            showConfirmButton: false,
            timer:2500,
          }) 
          break;
        default:
          Swal.fire({
            icon: 'error',
            title: 'Error desconocido, intenta de nuevo!',
            showConfirmButton: false,
            timer:3500,
          }) 
          break;
      }
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error desconocido, intenta de nuevo!',
        showConfirmButton: false,
        timer:3500,
      }) 
    });
  }

}
