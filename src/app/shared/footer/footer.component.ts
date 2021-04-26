import { Component, OnInit } from '@angular/core';
import { datosContacto } from 'src/app/core/models/shared/contacto.model';
import { SessionService } from 'src/app/core/services/session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  datosContacto: datosContacto;

  constructor(public sesion: SessionService) {
    this.datosContacto = environment.contacto;
  }

  ngOnInit() {
  }

}
