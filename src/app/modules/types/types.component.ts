import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irPersonalizador(cat: string) {
    this.router.navigate(['/personalizador/' + cat]);
  }
}
