import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() clase;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irPersonalizador(cat: string) {
    if(cat){
      this.router.navigate(['/personalizador/' + cat]);
    }
  }

}
